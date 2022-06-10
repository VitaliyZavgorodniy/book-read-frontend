export function* getDaysInterval(interval) {
  let cursor = interval.start.startOf('day');
  while (cursor < interval.end) {
    yield cursor;
    cursor = cursor.plus({ days: 1 });
  }
}
