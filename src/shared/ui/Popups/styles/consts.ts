import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  bottomLeft: cls.optionsBottomLeft,
  bottomRight: cls.optionsBottomRight,
  topRight: cls.optionsTopRight,
  topLeft: cls.optionsTopLeft,
};
