import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';

export const CommentCardSkeleton = () => (
  <VStack max className={classNames(cls.CommentCard, {}, [])}>
    <div className={cls.header}>
      <Skeleton width={30} height={30} borderRadius="50%" />
      <Skeleton width={100} height={16} className={cls.username} />
    </div>

    <Skeleton width="100%" height={50} className={cls.text} />
  </VStack>
);
