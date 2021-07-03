import React, { useContext } from "react";

import NotificationContext from "../../contexts/notification-context";
import Notification from "../notification/notification";

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <div>
      {props.children}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </div>
  );
}
