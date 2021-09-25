import { Button, notification, Space } from 'antd';
//type = success/info/warning/error
const notificationWithIcon = (type, title="",message="") => {
  notification[type]({
    message: title,
    description: message,
  });
};
export default notificationWithIcon;

// ReactDOM.render(
//   <Space>
//     <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
//     <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
//     <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
//     <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
//   </Space>,
//   mountNode,
// );