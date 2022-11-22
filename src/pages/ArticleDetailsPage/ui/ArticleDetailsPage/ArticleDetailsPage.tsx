import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { articleId } = useParams<{ articleId: string }>();

  return (
    <div className={classNames('', {}, [className])}>
      {articleId && <ArticleDetails articleId={articleId} />}
      {t('Статья не найдена')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
