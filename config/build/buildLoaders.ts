import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(props: BuildOptions): webpack.RuleSetRule[] {
  const nativeCodeBabelLoader = buildBabelLoader({ ...props, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...props, isTsx: true });

  const cssLoader = buildCssLoader(props.isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    nativeCodeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
}
