import { createContext, useReducer } from "react";
import { initialState, uiReducer } from "./uiReducer";

const initialContext = {
  isToastVisible: false,
  toastType: "",
  toastMessage: "",
  showToast: (type: "SUCCESS" | "ERROR", message: string) => {},
  hideToast: () => {},
};

export const UiContext = createContext(initialContext);

const UiContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [uiState, dispatch] = useReducer(uiReducer, initialState);

  const contextValue = {
    isToastVisible: uiState.isToastVisible,
    toastType: uiState.toastType,
    toastMessage: uiState.toastMessage,
    showToast: (type: "SUCCESS" | "ERROR", message: string) =>
      dispatch({ type: "SHOW_TOAST", payload: { type, message } }),
    hideToast: () => dispatch({ type: "HIDE_TOAST" }),
  };

  return <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>;
};

export default UiContextProvider;
