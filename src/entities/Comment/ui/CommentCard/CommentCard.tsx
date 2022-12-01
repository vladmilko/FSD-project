import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = ({ className, comment }: CommentCardProps) => (
  <div className={classNames(cls.CommentCard, {}, [className])}>
    <AppLink
      to={`${RoutePath.profile}/${comment.user.id}`}
      className={cls.header}
    >
      {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}

      <Text title={comment.user.username} className={cls.username} />
    </AppLink>

    <Text text={comment.text} className={cls.text} />
  </div>
);