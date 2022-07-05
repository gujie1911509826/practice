import { Input, Form,Modal } from 'antd';
import React, { useEffect, useState } from 'react';

const Table_Modal = (props) => {
    useEffect(() => {
        console.log('这是郭杰测试Modal', props);

    }, [])
    const { visible_props, ModalCallBack, params } = props;
    const [visible, setVisable] = useState(visible_props);
    const onOk = () => {
        ModalCallBack();
        // setVisable(false);
        console.log('这是郭杰测试ok');
    }
    const onCancel = () => {
        // setVisable(false);
        ModalCallBack()
        console.log('这是郭杰测试onCancle');

    }
    return (
        <Modal
            visible={visible}
            title={'这是弹窗'}
            onOk={() => onOk()}
            onCancel={() => onCancel()}
            okText={'提交'}
            cancelText={'取消'}
        >
            <Input placeholder='请输入工号'></Input>
        </Modal >
    );
};

export default Form.create()(Table_Modal);