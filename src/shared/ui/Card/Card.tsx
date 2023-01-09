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
}

export const Card = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...otherProps
}: CardProps) => (
  <div
    className={classNames(cls.Card, {}, [className, cls[theme]])}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </div>
);
