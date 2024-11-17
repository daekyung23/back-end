// import * as fs from 'fs';
// import * as path from 'path';

// const SCHEMA_DIR = path.join(process.cwd(), 'prisma/zod-schemas');
// function fixSchemaNames(content: string, schemaPatterns: string[]): string {
//   if(schemaPatterns.length === 0) return content;
  
//   // 1. 먼저 전체 내용에서 찾기
//   const regex = new RegExp(`([A-Z][a-zA-Z0-9_]+)CountOutputTypeArgsSchema`, 'g');
//   content = content.replace(regex, (match, p1) => {
//     return `${p1.charAt(0).toLowerCase() + p1.slice(1)}CountOutputTypeArgsSchema`;
//   });

//   return content;
// }


// function fixTypeNames(content: string, typePatterns: string[]): string {
//   if(typePatterns.length === 0) return content;
//   return content.replace(
//     new RegExp(`z\\.ZodType<Prisma\\.([a-z][a-zA-Z_]*(?:${typePatterns.join('|')}))\\>`, 'g'),
//     (match, name) => {
//       // 맨 앞글자만 대문자로 변경
//       const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
//       return `z.ZodType<Prisma.${capitalizedName}>`;
//     }
//   );
// }

// function fix(content: string): string {
//   content = fixSchemaNames(content, ['CountOutputTypeArgsSchema']);
//   //content = fixTypeNames(content, ['AggregateArgs','CountOutputTypeDefaultArgs','CountOutputTypeSelect' ]);
//   return content;
// }

// function processFile(filePath: string) {
//   console.log(`Processing: ${filePath}`);
//   const content = fs.readFileSync(filePath, 'utf-8');
//   const fixed = fix(content);
  
//   if (content !== fixed) {
//     fs.writeFileSync(filePath, fixed);
//     console.log(`Updated: ${filePath}`);
//   }
// }

// // 디렉토리 내 모든 .ts 파일 처리
// fs.readdirSync(SCHEMA_DIR)
//   .filter(file => file.endsWith('.ts'))
//   .forEach(file => {
//     processFile(path.join(SCHEMA_DIR, file));
//   });

// console.log('Schema name conversion completed!');