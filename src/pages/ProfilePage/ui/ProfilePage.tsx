import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersMap,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersMap = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>{t('PROFILE PAGE')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
