import { all } from "redux-saga/effects";
import employeesSaga from "./employee/sagas";

export default function* rootSaga(getState) {
  yield all([employeesSaga()]);
}
