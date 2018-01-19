import { USER_LOGGED_IN, AUTH_STATE_CHANGED } from "../actions/types";

export default function user(state = null, action = {}) {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}
