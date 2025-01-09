/**
 * 현재 날짜와 시간을 YYYY-MM-DD_HH-mm-ss 형식의 문자열로 반환
 */
export const getNowString = () => {
  return new Date()
    .toLocaleString('sv')
    .replace(/\D/g, '_')
    .slice(0, -4)
}


