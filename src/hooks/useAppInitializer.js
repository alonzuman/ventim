import React, { useEffect } from 'react'
import useEvents from './useEvents';
import useGroups from './useGroups'
import useProfile from './useProfile';

const useAppInitializer = () => {
  const { groups, fetchMyGroups } = useGroups();
  const { events, fetchMyEvents } = useEvents();
  const { profile, isLoading, fetchProfile } = useProfile();

  useEffect(() => {
    if (!profile) return fetchProfile();
  }, [profile])

  useEffect(() => {
    if (events?.all?.length === 0) return fetchMyEvents();
  }, [events?.all])

  useEffect(() => {
    if (groups?.all?.length === 0) return fetchMyGroups();
  }, [groups?.all])

  const groupsLoading = groups?.isLoading;
  const eventsLoading = events?.isLoading;
  const profileLoading = isLoading;

  return { groupsLoading, eventsLoading, profileLoading };
}

export default useAppInitializer
