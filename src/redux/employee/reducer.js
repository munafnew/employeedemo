import actions from "./actions";

const initialState = {
  selected: "",
  employees: [],
  error: false,
  loading: false,
  selectedEmployeeId: "",
  selectedEmployeeDetail: "",
};

export default function Employees(state = initialState, action) {
  switch (action.type) {
    case actions.GET_EMPLOYEES:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        selected: action.payload[0].id,
        selectedEmployeeDetail: action.payload[0],
        employees: action.payload,
      };
    case actions.GET_EMPLOYEES_FAILED || actions.GET_EMPLOYEES_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case actions.SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployeeId: action.payload,
      };
    case actions.GET_EMPLOYEES_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_EMPLOYEES_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: action.payload.id,
        selectedEmployeeDetail: action.payload,
      };

    default:
      return state;
  }
}
