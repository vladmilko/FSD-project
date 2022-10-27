import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

type NavbarProps = {
  classname?: string;
};

export const Navbar = ({ classname }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [classname])}>
    <div className={cls.links}>/</div>
  </div>
);
