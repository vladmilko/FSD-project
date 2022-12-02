import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewType } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  view: ArticleViewType;
  page: number;
  hasMore: boolean;
  error: boolean;
  limit?: number;
  isLoading?: boolean;

  _inited: boolean;
}
