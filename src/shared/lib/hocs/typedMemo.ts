import { memo } from 'react';

export const typedMemo: <T>(Comp: T) => T = memo;
