import { ArticleViewType } from 'entities/Article/model/types/article';
import { Fragment } from 'react';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from './components/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListSkeletonProps {
  viewType: ArticleViewType;
}

export const ArticleListSkeleton = ({ viewType }: ArticleListSkeletonProps) => (
  <div className={cls[viewType]}>
    {new Array(viewType === ArticleViewType.SMALL ? 3 : 9)
      .fill(<ArticleListItemSkeleton viewType={viewType} />)
      .map((component, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>{component}</Fragment>
      ))}
  </div>
);
