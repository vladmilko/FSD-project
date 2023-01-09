import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleViewType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  error: boolean;
  _inited: boolean;
  isLoading?: boolean;

  // пагинация
  page: number;
  hasMore: boolean;
  limit: number;

  // фильтрация
  view: ArticleViewType;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
}
