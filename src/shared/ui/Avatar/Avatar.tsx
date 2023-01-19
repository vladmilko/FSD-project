import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import DefaultUserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = ({
  className,
  src,
  size,
  alt,
  fallbackInverted,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({ width: size, height: size }),
    [size],
  );

  return (
    <AppImage
      src={src}
      style={styles}
      alt={alt}
      errorFallback={
        <Icon
          Svg={DefaultUserIcon}
          width={size}
          height={size}
          inverted={fallbackInverted}
        />
      }
      fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
};
