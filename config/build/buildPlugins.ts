import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  withAnalyze,
  apiUrl,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const PLUGINS: webpack.WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
  ];

  if (withAnalyze) {
    PLUGINS.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    PLUGINS.push(
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  if (!isDev) {
    PLUGINS.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }],
      }),
    );
  }

  return PLUGINS;
}
