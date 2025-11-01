import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/sdk.js",
      format: "umd",
      name: "CozyHome",
      sourcemap: true,
    },
    {
      file: "dist/sdk.esm.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(), // optional: minify output
  ],
};
