import getValue from '../getValue';

describe('getValue', () => {
  it('returns an object value', ()=>{
    expect(getValue({a: {b: {c: {}}}}, 'a.b.c')).toMatchObject({});
  });
  it('returns an object value', ()=>{
    expect(getValue({a: {b: {c: 'value'}}}, 'a.b.c')).toBe('value');
  });
  it('returns undefined', ()=>{
    expect(getValue({a: {b: {c: {}}}}, 'a.b.j')).toBeUndefined();
    expect(getValue({a: {b: {c: {}}}})).toBeUndefined();
  });
});
