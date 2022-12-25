import { useTranslation } from 'react-i18next';
import { SelectOption } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/consts/consts';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options: SelectOption<Currency>[] = Object.values(Currency).map(
  (currency) => ({
    content: currency,
    value: currency,
  }),
);

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <ListBox
        value={value}
        defaultValue={t('Укажите валюту')}
        label={t('Укажите валюту')}
        items={options}
        onChange={onChangeHandler}
        readonly={readonly}
        direction="topRight"
        className={className}
      />
    );
  },
);
