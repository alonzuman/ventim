import React, { createContext } from 'react'
import useProfile from '../hooks/useProfile';

export const ProfileContext = createContext(null);

const ProfileProvider = ({ children }) => {
  const { profile, isLoading, error, fetchProfile } = useProfile();

  const value = {
    profile,
    isLoading,
    error,
    fetchProfile
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
