export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (profileId: string) => `/profile/${profileId}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (articleId: string) =>
  `/articles/${articleId}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (articleId: string) =>
  `/articles/${articleId}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
