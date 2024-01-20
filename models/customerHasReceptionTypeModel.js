const connection = require('../database');

const CustomerHasReceptionType = {
    //모든 최상위 접수유형 조회
    getAllParentReceptionTypes : (callback) => {
        connection.query(
        `
        SELECT Reception_Name
        FROM Reception_Type 
        WHERE Parent_Reception_ID IS NULL
        `,
        (error, results) => {
            if (error) {
            callback(error, null);
            } else {
            const receptionNames = results.map((result) => result.Reception_Name);
            callback(null, receptionNames);
            }
        }
        );
    },
    
    // 한 고객사에 대한 최상위 접수유형들의 유무 반환
    getReceptionTypeByCustomerId : (customerId, callback) => {
        getAllParentReceptionTypes((parentReceptionTypesError, parentReceptionTypes) => {
        if (parentReceptionTypesError) {
            callback(parentReceptionTypesError, null);
        } else {
            connection.query(
            `
            SELECT Reception_Name
            FROM Customer
            JOIN Customer_Has_Reception_Type
            JOIN Reception_Type
            WHERE Customer_ID = ?
            `,
            [customerId],
            (customerError, customerResults) => {
                if (customerError) {
                callback(customerError, null);
                } else {
                const customerReceptionNames = customerResults.map((result) => result.Reception_Name);
                const receptionTypeObject = {
                    customerId: customerId,
                };
                parentReceptionTypes.forEach((typeName) => {
                    receptionTypeObject[typeName] = customerReceptionNames.includes(typeName);
                });
                callback(null, receptionTypeObject);
                }
            }
            );
        }
        });
    },

    // 고객사 이름으로 검색 후 각 고객사들에 대한 최상위 접수유형들의 유무 반환
    searchCustomerHasReceptionType: (searchTerms, page = 1, callback) => {
        const pageSize = 10;
        const offset = (page - 1) * pageSize;

        connection.query(
        `
        SELECT c.Customer_ID, c.Customer_Name, rt.Reception_Name
        FROM customer c
        LEFT JOIN customer_has_reception_type chr ON c.Customer_ID = chr.Customer_ID
        LEFT JOIN reception_type rt ON chr.Reception_ID = rt.Reception_ID
        WHERE c.Customer_Name LIKE ?
        LIMIT ?, ?
        `,
        [`%${searchTerms}%`, offset, pageSize],
        (error, results) => {
            if (error) {
            callback(error, null);
            } else {
            const customerReceptionTypes = {};

            results.forEach((result) => {
                const customerId = result.Customer_ID;
                const customerName = result.Customer_Name;
                const receptionName = result.Reception_Name;

                if (!customerReceptionTypes[customerId]) {
                customerReceptionTypes[customerId] = {
                    customerName: customerName,
                    receptionTypes: [],
                };
                }

                if (receptionName) {
                customerReceptionTypes[customerId].receptionTypes.push(receptionName);
                }
            });

            callback(null, customerReceptionTypes);
            }
        }
        );
    },

    // 각 고객사들에 대한 접수유형들 수정
    updateCustomerHasReceptionType: (customerId, customer, callback) => {
        const receptionTypes = customer.receptionTypes || [];

        connection.beginTransaction((transactionError) => {
        if (transactionError) {
            return callback(transactionError, null);
        }

        connection.query(
            `
            DELETE FROM customer_has_reception_type
            WHERE Customer_ID = ?
            `,
            [customerId],
            (deleteError) => {
            if (deleteError) {
                return connection.rollback(() => {
                callback(deleteError, null);
                });
            }

            const insertQueries = receptionTypes.map((receptionType) => {
                return new Promise((resolve, reject) => {
                connection.query(
                    `
                    INSERT INTO customer_has_reception_type (Customer_ID, Reception_ID)
                    VALUES (?, (SELECT Reception_ID FROM reception_type WHERE Reception_Name = ?))
                    `,
                    [customerId, receptionType],
                    (insertError) => {
                    if (insertError) {
                        reject(insertError);
                    } else {
                        resolve();
                    }
                    }
                );
                });
            });

            Promise.all(insertQueries)
                .then(() => {
                connection.commit((commitError) => {
                    if (commitError) {
                    return connection.rollback(() => {
                        callback(commitError, null);
                    });
                    }

                    callback(null, { message: 'Customer reception types updated successfully' });
                });
                })
                .catch((insertError) => {
                connection.rollback(() => {
                    callback(insertError, null);
                });
                });
            }
        );
        });
    },
};

module.exports = CustomerHasReceptionType;