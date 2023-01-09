import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<ArticleDetailsCommentsSchema['error']>
>('articleDetailsPage/fetchArticleRecommendations', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: 4,
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue(false);
  }
});
