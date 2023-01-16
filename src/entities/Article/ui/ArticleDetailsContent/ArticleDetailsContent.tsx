import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlock } from './components/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from './components/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from './components/ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleDetailsContent.module.scss';

interface ArticleDetailsContentProps {
  block: ArticleBlock;
}

export const ArticleDetailsContent = ({
  block,
}: ArticleDetailsContentProps) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlock block={block} className={cls.block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlock block={block} className={cls.block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlock className={cls.block} block={block} />;
    default:
      return null;
  }
};
