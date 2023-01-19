import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/PageWrapper';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return <PageWrapper data-testid="AboutPage">{t('О сайте')}</PageWrapper>;
});

export default AboutPage;
