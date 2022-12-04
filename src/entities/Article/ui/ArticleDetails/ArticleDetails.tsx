import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleDetailsContent } from '../ArticleDetailsContent/ArticleDetailsContent';

interface ArticleDetailsProps {
  className?: string;
  articleId: string;
}

const reducers: ReducersMap = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({
  className,
  articleId,
}: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const articleDetailsData = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId));
    }
  }, [articleId, dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {isLoading && (
          <>
            <Skeleton
              className={cls.avatar}
              width={200}
              height={200}
              borderRadius="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
          </>
        )}

        {error && (
          <Text
            align={TextAlign.CENTER}
            title={t('Произошла ошибка при загрузке статьи.')}
            theme={TextTheme.ERROR}
          />
        )}

        {!error && !isLoading && articleDetailsData && (
          <>
            <HStack justify="center" className={cls.avatarWrapper}>
              <Avatar
                size={200}
                src={articleDetailsData?.img}
                className={cls.avatar}
              />
            </HStack>

            <VStack gap="8" max>
              <Text
                className={cls.title}
                title={articleDetailsData?.title}
                text={articleDetailsData?.subtitle}
                size={TextSize.L}
              />

              <HStack gap="8" className={cls.articleInfo} max>
                <Icon className={cls.icon} Svg={EyeIcon} />
                <Text text={String(articleDetailsData?.views)} />
              </HStack>

              <HStack gap="8" className={cls.articleInfo} max>
                <Icon className={cls.icon} Svg={CalendarIcon} />
                <Text text={articleDetailsData?.createdAt} />
              </HStack>
            </VStack>

            {articleDetailsData?.blocks.map((block) => (
              <ArticleDetailsContent key={block.id} block={block} />
            ))}
          </>
        )}
      </VStack>
    </DynamicModuleLoader>
  );
};
