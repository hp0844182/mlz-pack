import { config as configs } from './config';

export const getBabelConfig = () => {
  const config = configs.get();
  const babelCfg = {
    'presets': [
      [
        '@babel/preset-env',
        {
          'modules': false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript', // ts
    ],
    'plugins': [
      ['import', {
        'libraryName': 'antd',
        'style': 'css',
      }],
      ['react-css-modules', {
        'generateScopedName': config.cssScopeName,
        'filetypes': {
          '.scss': {
            'syntax': 'postcss-scss',
          },
        },
      }],
      [
        '@babel/plugin-transform-runtime',
        {
          'corejs': false,
          'helpers': true,
          'regenerator': true,
          'useESModules': false,
        },
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
  };
  return babelCfg;
};