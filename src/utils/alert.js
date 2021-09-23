import { Alert, Switch } from 'antd';
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


//   <>
//     <Alert message="Success Tips" type="success" showIcon />
//     <Alert message="Informational Notes" type="info" showIcon />
//     <Alert message="Warning" type="warning" showIcon closable />
//     <Alert message="Error" type="error" showIcon />
//     <Alert
//       message="Success Tips"
//       description="Detailed description and advice about successful copywriting."
//       type="success"
//       showIcon
//     />
//     <Alert
//       message="Informational Notes"
//       description="Additional description and information about copywriting."
//       type="info"
//       showIcon
//     />
//     <Alert
//       message="Warning"
//       description="This is a warning notice about copywriting."
//       type="warning"
//       showIcon
//       closable
//     />
//     <Alert
//       message="Error"
//       description="This is an error message about copywriting."
//       type="error"
//       showIcon
//     />
//   </>,
//   mountNode,
// );