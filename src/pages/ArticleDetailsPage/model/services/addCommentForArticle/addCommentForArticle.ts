import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<boolean>
>(
  'addCommentForm/addCommentForArticle',
  async (commentText, { dispatch, rejectWithValue, extra, getState }) => {
    const userData = getUserAuthData(getState());
    const articleData = getArticleDetailsData(getState());

    if (!userData || !commentText || !articleData) {
      return rejectWithValue(false);
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: articleData.id,
        userId: userData.id,
        text: commentText,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleData.id));

      return response.data;
    } catch (e) {
      return rejectWithValue(false);
    }
  },
);
