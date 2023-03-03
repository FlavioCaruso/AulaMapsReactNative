import {useState} from 'react';
import {Linking} from 'react-native';

// Hooks
import {useAppSelector} from '../../../store/hooks';

// Services
import {
  useLazyGetGithubProfileQuery,
  useLazyGetGithubProfileReposQuery,
} from '../../../store/services/githubApi';

export default function useDashboard() {
  const [profile, setProfile] = useState<string>('');
  const user = useAppSelector(state => state.user);
  const [trigger, {isLoading, data}] = useLazyGetGithubProfileQuery();
  const [reposTrigger, repos] = useLazyGetGithubProfileReposQuery();

  const fetchProfile = () => {
    trigger(profile);
    reposTrigger(profile);
  };

  const openProfile = () => {
    data && Linking.openURL(data.html_url);
  };

  return {
    openProfile,
    fetchProfile,
    setProfile,
    profile,
    user,
    isLoading,
    repos,
    data,
  };
}
