import path from "path";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import clear from "rollup-plugin-clear";
import { eslint } from "rollup-plugin-eslint";
import vueJs from "rollup-plugin-vue";

// import { DEFAULT_EXTENSIONS } from "@babel/core";
const extensions = [".js", ".jsx", ".ts", ".tsx"];

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
    format: "es",
    name: pkg.name,
    sourcemap: true,
  },
  // external: ["crypto-js"],
  external: [/@babel\/runtime/,'vue'],
  plugins: [
    clear({ targets: ["lib"] }),
    // // 验证导入的文件
    // eslint({
    //   throwOnError: true,
    //   throwOnWarning: true,
    //   include: ["src/**/*.ts"],
    //   exclude: ["node_modules/**", "lib/**", "*.js", "test/**"],
    // }),

    resolve({
      extensions,
    }),
    typescript(),
    babel({
      babelHelpers: "runtime",
      // 只转换源代码，不运行外部依赖
      exclude: "node_modules/**",
      // babel 默认不支持 ts 需要手动添加
      extensions,
    }),
    commonjs(),
    // vueJs(),
  ],
};

export default rollupConfig;
