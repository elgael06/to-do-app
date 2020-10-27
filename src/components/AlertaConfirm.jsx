const { Modal } = require("antd-mobile");


const alert = Modal.alert;
const alertaConfirm = ({
    title='',
    data='',
    acept='',
    onAcept=e=>e,
    cancel='',
    onCancel=e=>e,
}) => {

    return(
        alert(title,data,[
            { text: cancel, onPress: () => onCancel(), style: 'default' },
            { text: acept, onPress: () => onAcept() },
        ])
    );
}

export default alertaConfirm;