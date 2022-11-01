import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const onBlurHandler = () => {
      setIsFocused(false);
    };

    const onFocusHandler = () => {
      setIsFocused(true);
    };

    const onSelectHandler = (e: SyntheticEvent<HTMLDivElement, Event>) => {
      if (e.target instanceof HTMLInputElement) {
        setCaretPosition(e?.target?.selectionStart || 0);
      }
    };

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={cls.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            className={cls.input}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            onSelect={onSelectHandler}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
          />

          {isFocused && (
            <span
              className={cls.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  },
);
