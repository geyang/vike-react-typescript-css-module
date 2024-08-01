import { UserConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import vike from 'vike/plugin';
import react from '@vitejs/plugin-react-swc';
import { cjsInterop } from 'vite-plugin-cjs-interop';

export default {
  plugins: [
    vike({
      prerender: true,
    }),
    mdx(),
    react({
      jsxImportSource: '@emotion/react',
      devTarget: 'es2022',
      tsDecorators: true,
      // plugins: [['@swc/plugin-emotion', {}]],
    }),
    cjsInterop({
      // List of CJS dependencies that require interop
      dependencies: [
        'react-helmet-async',
      ],
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      // https://github.com/emotion-js/emotion/issues/3129
      '@emotion/react/jsx-runtime': 'react/jsx-runtime',
    },
  },
} as UserConfig;
