import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewType } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewType;
}
