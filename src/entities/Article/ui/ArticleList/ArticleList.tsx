import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
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
  const { t } = useTranslation('articles');

  if (!isLoading && !articles.length) {
    return (
      <div
        className={classNames(cls.ArticleList, {}, [className, cls[viewType]])}
      >
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[viewType]])}>
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          viewType={viewType}
        />
      ))}
      {isLoading && <ArticleListSkeleton viewType={viewType} />}
    </div>
  );
};
