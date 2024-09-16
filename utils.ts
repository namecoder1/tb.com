function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "numeric", day: "numeric"}

  return new Date(date).toLocaleDateString(undefined, options);
};

export { formatDate };