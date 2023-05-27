export const getDate = (dateString: string) => {
  const date = new Date(dateString);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const formattedDate = `${dateString.substr(0, 10)} ${dayOfWeek}요일`;

  return formattedDate;
};
