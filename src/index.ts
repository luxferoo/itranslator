import Config from './type/config';
import _trans from './helper/trans';

let globalConfig: Config;

export const setConfig = (config: Config) : void => {
  globalConfig = config;
};

export function trans(
    key: string,
    config: Config | undefined = undefined,
): string {
  return _trans(key, {
    ...globalConfig,
    ...config,
  });
}
