import sortByTitle from './sortByTitle';

describe ('sortByTitle', () => {
  it('should sort array', () => {
    const arr = [
      {
        title: 'c'
      },
      {
        title: 'b'
      },
      {
        title: 'a'
      }
    ];

    sortByTitle(arr);
    expect(arr).toEqual([
      {
        title: 'a'

      },
      {
        title: 'b'

      },
      {
        title: 'c'
      }
    ])
  });
});
