import { toast } from "react-toastify";

const showNotification = (type, msg, className) =>
  toast(msg, {
    className,
  });

export { showNotification };
