import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../../../model/types/article';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock = memo(
  ({ className, block }: ArticleTextBlockProps) => (
    <div className={classNames('', {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}

      {block.paragraphs.map((paragraph) => (
        <Text
          key={`${block.id}${paragraph}`}
          text={paragraph}
          className={cls.paragraph}
        />
      ))}
    </div>
  ),
);
