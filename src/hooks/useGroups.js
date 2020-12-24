import { useContext } from 'react'
import { GroupsContext } from '../providers/GroupsProvider';

const useGroups = () => {
  const { group, myGroups, fetchMyGroups, fetchGroup } = useContext(GroupsContext)

  return { group, myGroups, fetchMyGroups, fetchGroup };
}

export default useGroups
