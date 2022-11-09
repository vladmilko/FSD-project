import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, ClassnamesMods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(
  ({ className, label, onChange, options, readonly, value }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionsList = useMemo(
      () =>
        options?.map((opt) => (
          <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        )),
      [options],
    );

    const MODS: ClassnamesMods = {
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.Wrapper, MODS, [className])}>
        {label && (
          <span className={classNames(cls.label, MODS)}>{`${label}>`}</span>
        )}

        <select
          disabled={readonly}
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
      </div>
    );
  },
);
