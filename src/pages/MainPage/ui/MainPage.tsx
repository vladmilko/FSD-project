import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <PageWrapper>{t('Главная страница')}</PageWrapper>;
});

export default MainPage;
