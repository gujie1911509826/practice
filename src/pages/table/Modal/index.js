import { Input, Form, Modal } from 'antd';
import styles from './index.less';
import React, { useEffect, useState } from 'react';

const Table_Modal = (props) => {
    const { visible_props, ModalCallBack, params, form } = props;

    const { getFieldDecorator,validateFields } = form;
    const [visible, setVisable] = useState(visible_props);
    const [disabled , setDisable] = useState(false);
    useEffect(() => {
        console.log('这是郭杰测试Modal', form);
        form.setFieldsValue(params);

    }, [])

    const onOk = () => {
        form.validateFields((error,value)=>{
            if(error){}
        })
        ModalCallBack();
        // setVisable(false);
        console.log('这是郭杰测试ok');
    }
    const onCancel = () => {
        // setVisable(false);
        ModalCallBack()
        console.log('这是郭杰测试onCancle');

    }
    const formItemLayout = {
        labelCol: {

            xs: { span: 24 },

            sm: { span: 8 },

        },

        wrapperCol: {

            xs: { span: 24 },

            sm: { span: 16 },

        }
    }
    const form_arr = [
        { label: '员工姓名', required: true, value: 'name' },
        { label: '员工工号', required: true, value: 'num' },
        { label: '员工邮箱', required: true, value: 'email' },
        { label: '联系方式', required: true, value: 'phone' },
        { label: '职级', required: true, value: 'level' },
        { label: '状态', required: true, value: 'statue' }]
    return (
        <Modal
            visible={visible}
            title={'这是弹窗'}
            // className={styles.Modal_style}
            onOk={() => onOk()}
            onCancel={() => onCancel()}
            okText={'提交'}
            cancelText={'取消'}
        >
            <Form
                {...formItemLayout}
            >
                {form_arr.map((item,index)=>
                    <Form.Item  key={index} label={item?.label}>
                    {getFieldDecorator(item?.value, {
                    rules: [{ required: item?.required || false, message: `请输入${item.label}` }],
                    })(<Input disabled={false}/>)}
                    </Form.Item>
                )}
                {/* <Form.Item label="员工姓名">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="员工工号">
                    {getFieldDecorator('num', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="员工邮箱">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="联系方式">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="职级">
                    {getFieldDecorator('level', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="状态">
                    {getFieldDecorator('statue', {
                        rules: [{ required: true, message: 'Please input your key!' }],
                    })(<Input />)}
                </Form.Item> */}


            </Form>
        </Modal >
    );
};

export default Form.create()(Table_Modal);