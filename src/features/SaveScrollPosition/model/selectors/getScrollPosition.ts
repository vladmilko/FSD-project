import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPosition = (state: StateSchema) => state?.scrollPosition;

export const getScrollPositionByPath = createSelector(
  getScrollPosition,
  (_: StateSchema, path: string) => path,
  (scrollPosition, path) => scrollPosition?.[path] || 0,
);
