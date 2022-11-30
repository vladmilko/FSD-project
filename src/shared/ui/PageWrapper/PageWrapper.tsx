import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  className?: string;
}

export const PageWrapper = ({
  className,
  children,
  onScrollEnd,
}: PageWrapperProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onScrollEnd, triggerRef, wrapperRef });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.PageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
