import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type webpack from "webpack";
import { type BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const scssLoader =  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          },
        }
      },
      'sass-loader',
    ]
  }

  return [
    typescriptLoader,
    scssLoader,
  ];
}