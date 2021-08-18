import Config from '../type/config';
import getValue from './getValue';

export default (key: string, {vars, source}: Config): string => {
  let value = source && getValue(source, key);

  if (typeof value !== 'string') {
    return key;
  }

  vars &&
        vars.forEach((v, k) => {
          value = (value as string).replace(new RegExp(`%${k}%`, 'g'), v);
        });
  return value;
};
