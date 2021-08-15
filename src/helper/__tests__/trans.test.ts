import trans from '../trans';

describe('trans', () => {
  it('translates correctly', () => {
    expect(
        trans('it.hello', {
          source: {
            it: {
              hello: 'bonjourno',
            },
          },
        }),
    ).toBe('bonjourno');
  });
  it('translates correctly and replace var', () => {
    expect(
        trans('it.hello', {
          vars: new Map().set('name', 'imam'),
          source: {
            it: {
              hello: 'bonjourno %name%',
            },
          },
        }),
    ).toBe('bonjourno imam');
  });
  it('returns the passed key when no translation is available', () => {
    expect(
        trans('it.hello', {
          vars: new Map().set('name', 'imam'),
          source: {
            en: {
              hello: 'bonjourno %name%',
            },
          },
        }),
    ).toBe('it.hello');
  });
});

