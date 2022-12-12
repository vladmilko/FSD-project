export type { ScrollSchema } from './model/types/SaveScrollPosition';

export {
  getScrollPosition,
  getScrollPositionByPath,
} from './model/selectors/getScrollPosition';

export {
  scrollPositionActions,
  scrollPositionReducer,
} from './model/slices/saveScrollPositionSlice';
