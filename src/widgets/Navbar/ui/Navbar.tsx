import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';

type NavbarProps = {
  classname?: string;
};

export const Navbar = memo(({ classname }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [classname])}>
        <Text
          title={t('Best project ever')}
          theme={TextTheme.INVERTED}
          className={cls.appName}
        />

        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
          {t('Создать статью')}
        </AppLink>

        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [classname])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
