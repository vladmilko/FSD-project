import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersMap = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = () => {
    onSendComment(text || '');
    dispatch(addCommentFormActions.setText(''));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify="between"
        className={classNames(cls.AddCommentForm, {}, [className])}
        max
      >
        {error && (
          <Text
            text={t('Ошибка отправки комментария')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
