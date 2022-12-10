import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { Button } from '../Button/Button';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottomLeft: cls.optionsBottomLeft,
  bottomRight: cls.optionsBottomRight,
  topRight: cls.optionsTopRight,
  topLeft: cls.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = 'bottomRight' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
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
                    className={classNames(cls.item, { [cls.active]: active })}
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
                  className={classNames(cls.item, { [cls.active]: active })}
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
