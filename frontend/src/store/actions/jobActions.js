
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_FILTERS = "SET_FILTERS";

export const fetchJobsRequest = () => ({ type: FETCH_JOBS_REQUEST });
export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});
export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});
export const setSearchTerm = (term) => ({ type: SET_SEARCH_TERM, payload: term });
export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters });
