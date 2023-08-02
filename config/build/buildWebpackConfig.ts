import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugin";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths} = options;
  
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: 'bundle.[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves()
  };
}