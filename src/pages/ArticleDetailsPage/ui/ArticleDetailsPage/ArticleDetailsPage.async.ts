import { lazy } from 'react';

export default lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
    }),
);
