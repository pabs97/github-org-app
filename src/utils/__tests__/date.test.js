import formatDate from '../date';

const date = '2018-10-04T02:49:27Z';

describe('date tests', () => {
  test('empty date', () => {
    expect(formatDate(undefined)).toBe.undefined;
  });

  test('format date', () => {
    expect(formatDate(date)).toBe('October 3, 2018');
  });
});