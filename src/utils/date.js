export default function formatDate(date) {
  if (!date) return;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  return dateTimeFormat.format(new Date(date));
}