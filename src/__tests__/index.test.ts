import {trans, setConfig} from '..';

describe('index', () => {
  beforeEach(() => {
    setConfig({});
  });

  describe('Failed translation', () => {
    it('returns the same passed string', () => {
      expect(trans('foo.bar')).toBe('foo.bar');
    });
  });

  describe('Successful translation', () => {
    it('translates correctly with global config', () => {
      setConfig({
        source: {
          en: {
            hello: 'hello',
          },
        },
      });
      expect(trans('en.hello')).toBe('hello');
    });
    it('translates correctly with explicit config', () => {
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
  });
});
