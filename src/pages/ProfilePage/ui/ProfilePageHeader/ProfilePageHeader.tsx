import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { Fragment, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack justify="between" className={classNames('', {}, [className])} max>
      <Text title={t('Профиль')} />

      {canEdit && (
        <>
          {readonly && (
            <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
              {t('Редактировать')}
            </Button>
          )}

          {!readonly && (
            <HStack gap="8" max>
              <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                {t('Сохранить')}
              </Button>

              <Button onClick={onCancel} theme={ButtonTheme.OUTLINE_RED}>
                {t('Отменить')}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
