import { z } from 'zod'
import { ValidationError, DataNotFoundError, AffectedRowsError, InternalServerError } from '@src/utils/errors'

// 기본 Zod 객체를 감싸는 함수
export const Schema = (shape: z.ZodRawShape) => z.object(shape)

// 기본 타입 래핑
export const Nothing = z.object({}) // void
export const Undefined = z.undefined() // undefined
export const String = z.string().trim()
export const Number = z.coerce.number()
export const Double = Number
export const Integer = z.coerce.number().int()
export const Natural = z.coerce.number().int().min(1)
export const Binary = z.coerce.number().int().min(0).max(1)
export const Email = z.string().email().max(255)
export const Boolean = z.boolean()

// 유틸리티 타입
export const Enum = <T extends [string, ...string[]]>(values: T) => z.enum(values)
export const Array = <T extends z.ZodType>(type: T) => z.array(type)
export const Payload = (schema: z.ZodRawShape) => Schema({
  username: String.max(32),
  ...schema
})

// 패스스루 객체 정의
const Row = Schema({}).passthrough()
const Rows = Array(Row)
const RowExist = Rows.min(1)

// 검색 관련
export const SearchTerm = String.max(45).refine((val) => val.length > 0, {
  message: "검색어는 비어있을 수 없습니다."
})

// Result 스키마들
export const GetResult = Rows.refine((arr) => Rows.safeParse(arr).success, {
  message: "SELECT 쿼리 결과는 배열이어야 합니다."
})

export const GetResultExist = RowExist.refine((arr) => RowExist.safeParse(arr).success, {
  message: "데이터가 없습니다."
})

export const UpdateResult = Natural.refine((val) => Integer.safeParse(val).success, {
  message: "영향받은 행이 없습니다."
})

export const CreateResult = Array(Natural).refine((val) => Array(Natural).safeParse(val).success, {
  message: "생성된 행이 없습니다."
})

export const DeleteResult = Natural.refine((val) => Integer.safeParse(val).success, {
  message: "삭제된 행이 없습니다."
})

// 유틸리티 함수들
export const validGet = <T>(data: T) => {
  const parseResult = GetResult.safeParse(data)
  if (!parseResult.success) {
    throw new ValidationError(parseResult.error.errors)
  }
  return parseResult.data
}

export const validGetExist = <T>(data: T) => {
  const parseResult = GetResultExist.safeParse(data)
  if (!parseResult.success) {
    throw new DataNotFoundError(parseResult.error.errors)
  }
  return parseResult.data
}

export const validCreate = <T>(data: T) => {
  const parseResult = CreateResult.safeParse(data)
  if (!parseResult.success) {
    throw new InternalServerError(parseResult.error.errors)
  }
  return parseResult.data
}

export const validUpdate = <T>(data: T) => {
  const parseResult = UpdateResult.safeParse(data)
  if (!parseResult.success) {
    throw new AffectedRowsError(parseResult.error.errors)
  }
  return parseResult.data
}

export const validDelete = <T>(data: T) => {
  const parseResult = DeleteResult.safeParse(data)
  if (!parseResult.success) {
    throw new AffectedRowsError(parseResult.error.errors)
  }
  return parseResult.data
}