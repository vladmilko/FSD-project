import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleTextBlock } from '../../../ArticleDetailsContent/components/ArticleTextBlock/ArticleTextBlock';
import { Article, IArticleTextBlock } from '../../../../model/types/article';
import {
  ArticleBlockType,
  ArticleViewType,
} from '../../../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  viewType: ArticleViewType;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

export const ArticleListItem = ({
  className,
  viewType,
  article,
  target,
}: ArticleListItemProps) => {
  const { t } = useTranslation();

  const articleTypes = (
    <Text text={article.type.join(', ')} className={cls.types} />
  );
  const articleViews = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (viewType === ArticleViewType.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as IArticleTextBlock;

    return (
      <div className={classNames('', {}, [className, cls[viewType]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>

          <Text text={article.title} className={cls.title} />

          {articleTypes}

          <AppImage
            width="100%"
            height={250}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />

          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}

          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button>{t('Читать далее')}</Button>
            </AppLink>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={getRouteArticleDetails(article.id)}
      target={target}
      className={classNames('', {}, [className, cls[viewType]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>

        <div className={cls.infoWrapper}>
          {articleTypes}
          {articleViews}
        </div>

        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
};
