import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = 'bottomRight' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          if (item.href) {
            return (
              <Menu.Item
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                disabled={item.disabled}
              >
                {({ active }) => (
                  <AppLink
                    to={item.href as string}
                    onClick={item.onClick}
                    className={classNames(cls.item, {
                      [popupCls.active]: active,
                    })}
                  >
                    {item.content}
                  </AppLink>
                )}
              </Menu.Item>
            );
          }

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {({ active }) => (
                <Button
                  disabled={item.disabled}
                  onClick={item.onClick}
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                  })}
                >
                  {item.content}
                </Button>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
