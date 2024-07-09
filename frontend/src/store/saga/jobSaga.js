
import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchJobsRequest,
    fetchJobsSuccess,
    fetchJobsFailure,
    FETCH_JOBS_REQUEST,
} from "../actions/jobActions";
import { fetchJobsApi } from "../api";

function* fetchJobs() {
  try {
    const jobs = yield call(fetchJobsApi);
    yield put(fetchJobsSuccess(jobs));
  } catch (e) {
    yield put(fetchJobsFailure(e.message));
    console.log("hello")
  }
  console.log("hello")
}

function* jobSaga() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
}

export default jobSaga;
