import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { AppImage } from '@/shared/ui/AppImage';
import { IArticleImageBlock } from '../../../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock = memo(
  ({ className, block }: ArticleImageBlockProps) => (
    <div className={classNames('', {}, [className])}>
      <AppImage
        width="100%"
        height={250}
        src={block.src}
        alt={block.title}
        className={cls.img}
      />

      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  ),
);
