import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { articleId } = useParams<{ articleId: string }>();
  const isEdit = Boolean(articleId);

  return (
    <PageWrapper className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? t('Редактирование статьи с ID = ') + articleId
        : t('Создание новой статьи')}
    </PageWrapper>
  );
});

export default ArticleEditPage;
