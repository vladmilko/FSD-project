import {
  ArticleList,
  ArticleViewSelector,
  ArticleViewType,
} from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className: string;
}

const reducers: ReducersMap = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const articlesView = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const onChangeView = useCallback(
    (newArticlesView: ArticleViewType) => {
      dispatch(articlesPageActions.setView(newArticlesView));
    },
    [dispatch],
  );

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlesPage());
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {error && (
        <Text title={t('Ошибка загрузки статей')} theme={TextTheme.ERROR} />
      )}
      <PageWrapper
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={articlesView} onViewClick={onChangeView} />

        <ArticleList
          articles={articles}
          viewType={articlesView}
          isLoading={isLoading}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
