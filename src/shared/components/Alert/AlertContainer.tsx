import { useEffect, useState } from "react";
import { Alert } from "./Alert";
import { SHOW_ALERT_EVENT } from "../../../constants/constants";

export const AlertContainer = ({
  message,
  callback,
}: {
  message: string;
  callback: () => void;
}) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.addEventListener(SHOW_ALERT_EVENT, () => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    });
  }, []);

  return <>{showAlert && <Alert message={message} callback={callback} />}</>;
};
