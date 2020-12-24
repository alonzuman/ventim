import { INITIAL_STATE } from "../providers/EventsProvider";

export const IS_LOADING_MY_EVENTS = 'EVENTS/IS_LOADING_MY_EVENTS';
export const SET_MY_EVENTS = 'EVENTS/SET_MY_EVENTS';
export const ERROR = 'EVENTS/ERROR';

const eventsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_LOADING_MY_EVENTS:
      return {
        ...state,
        isLoading: true
      }
    case SET_MY_EVENTS:
      return {
        ...state,
        myEvents: payload,
        isLoading: false
      }
    case ERROR: return INITIAL_STATE;
    default: return state;
  }
}

export default eventsReducer;
