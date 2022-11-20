import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const MODE = env.mode || 'development';
  const ISDEV = MODE === 'development';
  const WITH_ANALYZER = env?.analyze === '1';
  const PORT = env.port || 3000;
  const API_URL = env.apiUrl || 'http://localhost:8000';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    isDev: ISDEV,
    port: PORT,
    apiUrl: API_URL,
    withAnalyze: WITH_ANALYZER,
    project: 'frontend',
  });

  return config;
};
