import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={s.notification}>
      <h2 className={s.notificationMessage}>{message}</h2>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
