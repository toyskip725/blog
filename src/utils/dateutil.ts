export namespace DateUtility {
  export const format = (targetDate: Date) => {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const date = targetDate.getDate();

    return `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
  };
}