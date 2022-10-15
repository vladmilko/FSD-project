import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

type NavbarProps = {
  classname?: string;
};

export const Navbar = ({ classname }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [classname])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
