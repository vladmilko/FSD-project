import { ArticleViewType } from 'entities/Article/model/types/article';
import { Fragment } from 'react';
import { ArticleListItemSkeleton } from './components/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListSkeletonProps {
  viewType: ArticleViewType;
  className?: string;
}

export const ArticleListSkeleton = ({
  viewType,
  className,
}: ArticleListSkeletonProps) => (
  <>
    {new Array(viewType === ArticleViewType.SMALL ? 3 : 9)
      .fill(
        <ArticleListItemSkeleton viewType={viewType} className={className} />,
      )
      .map((component, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>{component}</Fragment>
      ))}
  </>
);
