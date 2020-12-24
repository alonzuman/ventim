import { INITIAL_STATE } from "../providers/GroupsProvider";

export const IS_LOADING_GROUP = 'GROUPS/IS_LOADING_GROUP';
export const IS_LOADING_GROUPS = 'GROUPS/IS_LOADING_GROUPS';
export const SET_GROUP = 'GROUPS/SET_GROUP';
export const SET_GROUPS = 'GROUPS/SET_GROUPS';
export const ERROR = 'GROUPS/ERROR';

const groupsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_LOADING_GROUP: {
      return {
        ...state,
        group: {
          isLoading: true
        }
      }
    }
    case IS_LOADING_GROUPS: {
      return {
        ...state,
        myGroups: {
          isLoading: true
        }
      }
    }
    case SET_GROUP: {
      return {
        ...state,
        group: {
          data: payload,
          isLoading: false
        }
      }
    }
    case SET_GROUPS: {
      return {
        ...state,
        myGroups: {
          all: payload,
          isLoading: false
        }
      }
    }
    case ERROR: return INITIAL_STATE;
    default: return state;
  }
}

export default groupsReducer;
