import actions from "../../redux/employee/actions";
import { useSelector, useDispatch } from "react-redux";
import SelectBox from "../SelectBox";

function SelectEmployee() {
  const dispatch = useDispatch()
  const { employees, selectedEmployeeDetail } = useSelector(
    (state) => state.employees
  );
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    dispatch(actions.getEmployeesDetail({ id: value.value }));
  }

  return (
    <SelectBox
      dafulatValue={selectedEmployeeDetail["name"]}
      options={employees}
      onChange={handleChange}
      label={"Select Employee"}
    />
  );
}

export default SelectEmployee;
