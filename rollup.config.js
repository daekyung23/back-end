import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/server.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,       // 모듈 구조 유지
    preserveModulesRoot: 'src'   // src를 루트로 사용
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      extensions: ['.js', '.ts']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      module: 'ESNext'
    })
  ],
  external: [
    /node_modules/,
    'express',
    'cors',
    'dotenv',
    '@prisma/client'
  ]
}; 