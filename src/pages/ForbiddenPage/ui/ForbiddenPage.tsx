import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';

const ForbiddenPage = () => {
  const { t } = useTranslation('');

  return <PageWrapper>{t('У вас нет доступа к этой странице')}</PageWrapper>;
};

export default ForbiddenPage;
