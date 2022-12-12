import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from 'widgets/PageWrapper';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
// eslint-disable-next-line max-len
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersMap = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { articleId } = useParams<{ articleId: string }>();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />

          <ArticleDetails articleId={articleId} />

          <ArticleRecommendationsList />

          <ArticleDetailsComments id={articleId} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
