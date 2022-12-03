import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleTextBlock } from '../../../ArticleDetailsContent/components/ArticleTextBlock/ArticleTextBlock';
import {
  Article,
  ArticleBlockType,
  ArticleViewType,
  IArticleTextBlock,
} from '../../../../model/types/article';
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

          <img src={article.img} alt={article.title} className={cls.img} />

          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}

          <div className={cls.footer}>
            <AppLink
              to={`${RoutePath.article_details}/${article.id}`}
              target={target}
            >
              <Button>{t('Читать далее')}</Button>
            </AppLink>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      to={`${RoutePath.article_details}/${article.id}`}
      target={target}
      className={classNames('', {}, [className, cls[viewType]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
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
