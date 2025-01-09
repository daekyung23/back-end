// backup.js와 동일한 상수 사용
export const CSV = {
  BOM: '\ufeff',
  NULL: '\\N',
  EMPTY: '',
  ENCODING: 'utf8',
  MIME_TYPE: 'text/csv'
} as const