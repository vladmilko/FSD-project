import { Article } from './article';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error: boolean;
  data?: Article;
}
