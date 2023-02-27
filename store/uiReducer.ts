type InitialState = {
  isToastVisible: boolean;
  toastType: "SUCCESS" | "ERROR" | "";
  toastMessage: string;
};

type DispatchedAction =
  | {
      type: "SHOW_TOAST";
      payload: {
        type: "SUCCESS" | "ERROR";
        message: string;
      };
    }
  | {
      type: "HIDE_TOAST";
    };

export const initialState: InitialState = {
  isToastVisible: false,
  toastType: "",
  toastMessage: "",
};

export const uiReducer = (state: InitialState, action: DispatchedAction): InitialState => {
  switch (action.type) {
    case "SHOW_TOAST":
      return { ...state, isToastVisible: true, toastType: action.payload.type, toastMessage: action.payload.message };
    case "HIDE_TOAST":
      return { ...state, isToastVisible: false, toastType: "", toastMessage: "" };
    default:
      return state;
  }
};
