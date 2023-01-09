import { ChangeEvent, useMemo } from 'react';
import { classNames, ClassnamesMods } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/hocs/typedMemo';
import cls from './Select.module.scss';

export interface SelectOption<Value extends string> {
  value: Value;
  content: string;
}

interface SelectProps<Value extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<Value>[];
  value?: Value;
  onChange?: (value: Value) => void;
  readonly?: boolean;
}

export const Select = typedMemo(
  <Value extends string>({
    className,
    label,
    onChange,
    options,
    readonly,
    value,
  }: SelectProps<Value>) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as Value);
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
