/* eslint-disable object-curly-newline */
/* eslint-disable default-param-last */
import { FAILED_REQUEST, GET_POSTS, LOADING, WICH_SUBREDDIT } from '../actions';

const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: null,
  subReddit: '',
};

function redditReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, loading: false };
    case WICH_SUBREDDIT:
      return { ...state, subReddit: action.payload };
    default:
      return state;
  }
}

export default redditReducer;
