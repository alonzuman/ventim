import { useContext, useEffect } from 'react'
import { db } from '../firebase';
import { GroupsContext } from '../providers/GroupsProvider';

const useGroups = () => {
  const { groups, fetchMyGroups, group, isLoading, fetchGroup, fetchGroupEvents } = useContext(GroupsContext)

  return { groups, group, fetchMyGroups, fetchGroup, isLoading, fetchGroupEvents };
}

export default useGroups
