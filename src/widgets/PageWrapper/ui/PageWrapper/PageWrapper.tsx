import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getScrollPositionByPath,
  scrollPositionActions,
} from '@/features/SaveScrollPosition';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  className?: string;
  shouldSaveScrollPosition?: boolean;
}

export const PageWrapper = ({
  className,
  children,
  onScrollEnd,
  shouldSaveScrollPosition,
}: PageWrapperProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname),
  );

  useInfiniteScroll({ callback: onScrollEnd, triggerRef, wrapperRef });

  useInitialEffect(() => {
    if (shouldSaveScrollPosition) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollPositionActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.PageWrapper, {}, [className])}
      onScroll={shouldSaveScrollPosition ? onScroll : undefined}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
    </main>
  );
};
