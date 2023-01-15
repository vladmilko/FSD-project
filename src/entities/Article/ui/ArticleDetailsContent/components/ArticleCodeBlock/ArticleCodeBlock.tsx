import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { IArticleCodeBlock } from '../../../../model/types/article';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo(
  ({ className, block }: ArticleCodeBlockProps) => (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      {block.code && <Code text={block.code} />}
    </div>
  ),
);
