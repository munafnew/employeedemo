import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/employee/actions";
import SelectEmployee from "../components/selectEmployee";
import EmployeeDetailsBoxes from "../components/EmployeeDetailsBoxes";
import LoadingWrapper from "../components/LoadingWrapper";

function EmployeeDetailPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getEmployees());
  }, []);
  const { selectedEmployeeDetail, loading, error } = useSelector(
    (state) => state.employees
  );
  return (
    <LoadingWrapper loading={!loading && selectedEmployeeDetail} error={error}>
      <>
        <SelectEmployee />
        <EmployeeDetailsBoxes />
      </>
    </LoadingWrapper>
  );
}

export default EmployeeDetailPage;
