import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onClick = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onClick}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
