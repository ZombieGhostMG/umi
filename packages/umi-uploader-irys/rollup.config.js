import { createConfigs } from '../../rollup.config';
import pkg from './package.json';

export default createConfigs({
  pkg,
  builds: [
    {
      dir: 'dist',
      format: 'es',
    },
  ],
});