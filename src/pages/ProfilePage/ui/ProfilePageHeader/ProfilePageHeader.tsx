import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />

      {readonly && (
        <Button
          onClick={onEdit}
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('Редактировать')}
        </Button>
      )}

      {!readonly && (
        <div className={cls.buttonContainer}>
          <Button
            onClick={onSave}
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
          >
            {t('Сохранить')}
          </Button>

          <Button onClick={onCancel} theme={ButtonTheme.OUTLINE_RED}>
            {t('Отменить')}
          </Button>
        </div>
      )}
    </div>
  );
};
