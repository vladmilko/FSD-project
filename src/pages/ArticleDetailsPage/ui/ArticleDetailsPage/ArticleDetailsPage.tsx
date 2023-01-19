import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/PageWrapper';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersMap = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { articleId } = useParams<{ articleId: string }>();

  if (!articleId) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        data-testid="ArticleDetailsPage"
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />

          <ArticleDetails articleId={articleId} />

          <ArticleRating articleId={articleId} />

          <ArticleRecommendationsList />

          <ArticleDetailsComments id={articleId} />
        </VStack>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
