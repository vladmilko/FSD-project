import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleViewType } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListSkeleton } from './ArticleListSkeleton';
import { ArticleListItem } from './components/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  viewType?: ArticleViewType;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  target,
  viewType = ArticleViewType.SMALL,
}: ArticleListProps) => {
  const { t } = useTranslation('articles');

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  const LayoutComponent = viewType === ArticleViewType.SMALL ? HStack : VStack;

  return (
    <LayoutComponent
      gap="8"
      flexWrap="wrap"
      max
      className={classNames('', {}, [className])}
    >
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          viewType={viewType}
          target={target}
        />
      ))}
      {isLoading && (
        <ArticleListSkeleton viewType={viewType} className={className} />
      )}
    </LayoutComponent>
  );
};
