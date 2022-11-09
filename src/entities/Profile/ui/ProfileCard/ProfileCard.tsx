import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, ClassnamesMods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  profileFormData?: Profile;
  onChangeLastname?: (value: string) => void;
  onChangeFirstname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
}

export const ProfileCard = ({
  className,
  profileFormData,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
  readonly,
  error,
  isLoading,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const MODS: ClassnamesMods = {
    [cls.loading]: isLoading,
    [cls.error]: error,
  };

  if (isLoading || error) {
    return (
      <div className={classNames(cls.ProfileCard, MODS, [className])}>
        {isLoading && <Loader />}

        {error && (
          <Text
            theme={TextTheme.ERROR}
            title={t('Произошла ошибка при загрузке профиля')}
            text={t('Попробуйте обновить страницу')}
            align={TextAlign.CENTER}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [
        className,
      ])}
    >
      <div className={cls.data}>
        {profileFormData?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={profileFormData?.avatar} alt="" />
          </div>
        )}

        <Input
          value={profileFormData?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />

        <Input
          value={profileFormData?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />

        <Input
          value={profileFormData?.age}
          placeholder={t('Возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />

        <Input
          value={profileFormData?.city}
          placeholder={t('Город')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />

        <Input
          value={profileFormData?.username}
          placeholder={t('Логин')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />

        <Input
          value={profileFormData?.avatar}
          placeholder={t('Ссылка на аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />

        <CurrencySelect
          className={cls.input}
          value={profileFormData?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />

        <CountrySelect
          className={cls.input}
          value={profileFormData?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
