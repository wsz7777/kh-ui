import path from "path";
import babel from "@rollup/plugin-babel";

import typescript from "@rollup/plugin-typescript";

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import postcss from "rollup-plugin-postcss";
import { eslint } from "rollup-plugin-eslint";

// import { DEFAULT_EXTENSIONS } from "@babel/core";
const extensions = [".ts", ".tsx"];

import pkg from "./package.json";

const paths = {
  input: path.join(__dirname, "/src/index.ts"),
  // input: path.join(__dirname, "/src/index.js"),
  output: path.join(__dirname, "/lib"),
};

// rollup 配置项
const rollupConfig = {
  input: paths.input,
  output: {
    dir: "lib",
    format: "esm",
    name: pkg.name,
    sourcemap: true,
  },
  // external: ["crypto-js"],
  external: [
    /@babel\/runtime/,
    "vue",
    "vue-class-component",
    // "vue-property-decorator",
  ],

  plugins: [
    // 清理上次打包结果
    clear({ targets: ["lib"] }),
    // 验证导入的文件
    eslint({
      // fix: true,
      throwOnError: true,
      throwOnWarning: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules/**", "lib/**", "*.js", "test/**"],
    }),

    // ts => js 转换
    typescript(),
    // 解析依赖
    resolve({ extensions }),
    commonjs(),
    // js => 目标可用
    babel({
      babelHelpers: "runtime",
      // exclude: "node_modules/**",
      extensions,
    }),
    postcss({
      extract: true,
      extensions: ["scss"],
    }),
    // vueJs(),
  ],
};

export default rollupConfig;
