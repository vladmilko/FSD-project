import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  fullWidth,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [
      className,
      cls[theme],
    ])}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </div>
);
