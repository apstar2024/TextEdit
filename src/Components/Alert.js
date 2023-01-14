import React from "react";
import PropTypes from 'prop-types';

export default function Alert(props) {
    // const [Alertmsg,setAlertmsg]=useState('');
    return (
        props.Alertmsg && <div className={`alert alert-${props.Alertmsg.type} alert-dismissible fade show`} role="alert">
            <strong>{props.Alertmsg.type} </strong> {props.Alertmsg.msg}
        </div>
    );
}
Alert.propTypes={
    Alrtmsg:PropTypes.string
}
// Alert.defaultProps={
//     Alertmsg:{}
// }
