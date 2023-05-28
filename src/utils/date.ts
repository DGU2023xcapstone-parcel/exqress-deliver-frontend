/**
 * 백엔드 날짜 데이터를 보기 편한값으로 변경
 * @param dateString 백엔드 날짜 데이터
 * @returns ex) 2023-05-11 일요일
 */
export const getDate = (dateString: string) => {
  const date = new Date(dateString);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const formattedDate = `${dateString.slice(0, 10)} ${dayOfWeek}요일`;

  return formattedDate;
};
