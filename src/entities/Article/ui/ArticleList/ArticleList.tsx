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
}: ArticleListProps) => (
  <div className={classNames('', {}, [className, cls[viewType]])}>
    {articles.map((article) => (
      <ArticleListItem
        key={article.id}
        article={article}
        viewType={viewType}
        className={cls.card}
      />
    ))}
    {isLoading && (
      <ArticleListSkeleton viewType={viewType} className={cls.card} />
    )}
  </div>
);
