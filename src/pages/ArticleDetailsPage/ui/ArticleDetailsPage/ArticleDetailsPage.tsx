import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => (
  // eslint-disable-next-line i18next/no-literal-string
  <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
    ArticleDetailsPage
  </div>
);

export default memo(ArticleDetailsPage);
