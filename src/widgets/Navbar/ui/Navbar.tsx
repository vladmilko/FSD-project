import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

type NavbarProps = {
  classname?: string;
};

export const Navbar = memo(({ classname }: NavbarProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

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

        <Dropdown
          direction="bottomLeft"
          className={cls.dropdown}
          items={[
            {
              content: t('Профиль'),
              href: `${RoutePath.profile}/${authData.id}`,
            },
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
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
