export const modifyToCorrectDate = (date: string): string => {
  const dateModel = {
    year: JSON.stringify(date).slice(1, 5),
    month: JSON.stringify(date).slice(6, 8),
    day: Number(JSON.stringify(date).slice(9, 11))
  };
  return [dateModel.year, dateModel.month, dateModel.day].join('-');
};
