Class Me {
  favColor: 'black';
  favSongs: [
    'Kiss From A Rose',
    'High',
    'Ocean Drive',
    'Crazy',
    'Let Your Hair Hang Down'
  ];

  public static void con Me() {

  }

  static void getMe() {
    do {
      keepTrying();
    } while ('there is time')
  }
}

describe('Me', () => {
  it('is a mystery', () => {
    expect(Me.getMe()).toBeUndefined();
  });
});
