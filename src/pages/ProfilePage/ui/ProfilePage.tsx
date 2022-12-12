import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={profileId} />
      </VStack>
    </PageWrapper>
  );
};

export default ProfilePage;
