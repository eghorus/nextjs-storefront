import { useContext, useEffect } from "react";
import { UiContext } from "../store/uiContext";

const Toast = () => {
  const uiCtx = useContext(UiContext);
  const { toastType, toastMessage, hideToast } = uiCtx;

  useEffect(() => {
    const timerId = setTimeout(() => {
      hideToast();
    }, 2000);
    console.log(timerId);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      className={`fixed bottom-10 left-10 rounded-sm px-6 py-3 text-white ${
        toastType === "SUCCESS" ? "bg-green-500" : "bg-red-400"
      }`}
    >
      <button type="button" className="absolute right-4 top-2 font-bold" onClick={hideToast}>
        ⨉
      </button>
      <strong className="mb-2 block">{toastType}</strong>
      <p>{toastMessage}</p>
    </div>
  );
};

export default Toast;
