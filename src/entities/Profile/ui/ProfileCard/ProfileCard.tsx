import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
// import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const profileData = useSelector(getProfileData);
  // const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать')}
        </Button>
      </div>

      <div className={cls.data}>
        <Input
          value={profileData?.first}
          placeholder={t('Ваше Имя')}
          className={cls.input}
        />
        <Input
          value={profileData?.lastname}
          placeholder={t('Ваше Фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
