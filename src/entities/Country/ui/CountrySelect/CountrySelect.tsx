import { useTranslation } from 'react-i18next';
import { SelectOption } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/consts/consts';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options: SelectOption<Country>[] = Object.values(Country).map(
  (country) => ({
    content: country,
    value: country,
  }),
);

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <ListBox
        onChange={onChangeHandler}
        value={value}
        defaultValue={t('Укажите страну')}
        label={t('Укажите страну')}
        items={options}
        readonly={readonly}
        direction="topRight"
        className={className}
      />
    );
  },
);
