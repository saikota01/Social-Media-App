import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast, {Toaster} from 'react-hot-toast'

function Toast() {
  const { message, success } = useSelector((state) => state);

  useEffect(() => {
    if (message) {
      success ? toast.success(message) : toast.error(message);
    }
  }, [message, success]);

  return (
    <Toaster />
  );
}

export default Toast;
