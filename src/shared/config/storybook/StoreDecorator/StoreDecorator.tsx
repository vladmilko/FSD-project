import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { ReducersMap } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';

const defaultAsyncReducers: ReducersMap = {
  loginForm: loginReducer,
  profile: profileReducer,
  articlesPage: articlesPageReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersMap) =>
    (StoryComponent: Story) =>
      (
        <StoreProvider
          initialState={state}
          asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
          <StoryComponent />
        </StoreProvider>
      );
