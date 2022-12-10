import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const { profileId } = useParams<{ profileId: string }>();

  if (!profileId) {
    return (
      <PageWrapper className={classNames('', {}, [className])}>
        <Text text={t('Профиль не найден!')} theme={TextTheme.ERROR} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={profileId} />
      </VStack>
    </PageWrapper>
  );
};

export default ProfilePage;
