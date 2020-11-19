import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { message } from "antd";
import {
  getEmployeesRequest,
  getEmployeesDetailsRequest,
  changeEmployeeDetailsRequest,
} from "./requets";
import actions from "./actions";

export function* getEmployees() {
  yield takeEvery(actions.GET_EMPLOYEES, function* ({ payload }) {
    try {
      const response = yield call(getEmployeesRequest, payload);
      console.log(response);
      if (response.data.length !== 0) {
        yield put({
          type: actions.GET_EMPLOYEES_SUCCESS,
          payload: response.data,
        });
        message.success("All Employees Details Fetched");
      } else {
        yield put({
          type: actions.GET_EMPLOYEES_FAILED,
          payload: "Error Occured",
        });
        message.error("Error Occured");
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actions.GET_EMPLOYEES_FAILED,
        payload: "Error Occured",
      });
      message.error("Error Occured");
    }
  });
}
export function* getEmployeesDetails() {
  yield takeEvery(actions.GET_EMPLOYEES_DETAIL, function* ({ payload }) {
    try {
      const response = yield call(getEmployeesDetailsRequest, payload);
      console.log(response);
      if (response.length !== 0) {
        yield put({
          type: actions.GET_EMPLOYEES_DETAILS_SUCCESS,
          payload: response.data,
        });
        message.success("All Employees Details Fetched");
      } else {
        yield put({
          type: actions.GET_EMPLOYEES_DETAILS_FAILED,
          payload: "Error Occured",
        });
        message.error("Error Occured");
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actions.GET_EMPLOYEES_FAILED,
        payload: "Error Occured",
      });
      message.error("Error Occured");
    }
  });
}
export function* postEmployeeDetails() {
  yield takeEvery(actions.POST_EMPLOYEES_DETAILS, function* ({ payload }) {
    try {
      const response = yield call(changeEmployeeDetailsRequest, payload);
      console.log(response);
      if (response.length !== 0) {
        yield put({
          type: actions.GET_EMPLOYEES_SUCCESS,
          payload: response,
        });
        message.success("All Employees Details Fetched");
      } else {
        yield put({
          type: actions.GET_EMPLOYEES_FAILED,
          payload: "Error Occured",
        });
        message.success("Posted Details");
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actions.GET_EMPLOYEES_FAILED,
        payload: "Error Occured",
      });
      message.success("Posted Details");
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getEmployees),
    fork(postEmployeeDetails),
    fork(getEmployeesDetails),
  ]);
}
