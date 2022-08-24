import fetchAPI from '../../services/fetchAPI';

export const LOADING = 'LOADING';
export const GET_POSTS = 'GET_POSTS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const WICH_SUBREDDIT = 'WICH_SUBREDDIT';

function loading() {
  return { type: LOADING };
}

function getPosts(posts) {
  return { type: GET_POSTS, payload: posts };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function wichSubReddit(subReddit) {
  return { type: WICH_SUBREDDIT, payload: subReddit };
}

export function fetchSubReddit(subReddit) {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const posts = await fetchAPI(subReddit);
      if (!posts) {
        throw new Error();
      }
      dispatch(getPosts(posts));
    } catch (e) {
      dispatch(failedRequest('Deu ruim'));
    }
  };
}
