import { toast } from 'react-toastify';

const showNotification = (_: any, msg: string, className: any) =>
  toast(msg, {
    className
  });

export { showNotification };
