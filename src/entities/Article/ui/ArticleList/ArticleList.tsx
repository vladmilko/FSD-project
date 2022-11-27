import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleViewType } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListSkeleton } from './ArticleListSkeleton';
import { ArticleListItem } from './components/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  viewType?: ArticleViewType;
  className?: string;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  viewType = ArticleViewType.SMALL,
}: ArticleListProps) => {
  if (isLoading) {
    return <ArticleListSkeleton viewType={viewType} />;
  }

  return (
    <div className={classNames('', {}, [className, cls[viewType]])}>
      {!isLoading &&
        articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            viewType={viewType}
            className={cls.card}
          />
        ))}
    </div>
  );
};
