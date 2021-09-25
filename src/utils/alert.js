import { Alert, Switch } from 'antd';
import { Button, notification, Space } from 'antd';
import {SUCCESS, ERROR, INFO, WARNING} from '../utils/constants';

const Alerts = (type, message) => {
    switch (type) {
        case SUCCESS:
            <Alert message="Success Tips" type="success" showIcon />
          break;
        case ERROR:
            <Alert message="Error" type="error" showIcon />
          break;
        case INFO:
            <Alert message="Informational Notes" type="info" showIcon />
          break;
        case WARNING:
            <Alert message="Warning" type="warning" showIcon closable />
          break; 
      }
}
export default Alerts;

