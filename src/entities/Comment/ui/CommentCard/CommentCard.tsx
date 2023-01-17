import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getRouteProfile } from '@/shared/const/router';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = ({ className, comment }: CommentCardProps) => (
  <VStack gap="8" className={classNames(cls.CommentCard, {}, [className])} max>
    <AppLink to={getRouteProfile(comment.id)} className={cls.header}>
      {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}

      <Text title={comment.user.username} className={cls.username} />
    </AppLink>

    <Text text={comment.text} className={cls.text} />
  </VStack>
);
