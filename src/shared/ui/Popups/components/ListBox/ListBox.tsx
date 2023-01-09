import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottomRight',
    label,
  } = props;

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames('', { [cls.disabled]: readonly })}
        >{`${label}>`}</span>
      )}

      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.popup, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          as={Button}
          disabled={readonly}
          className={popupCls.trigger}
        >
          {value ?? defaultValue}
        </HListBox.Button>

        <HListBox.Options
          className={classNames(cls.options, {}, [
            mapDirectionClass[direction],
          ])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [cls.selected]: selected,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
