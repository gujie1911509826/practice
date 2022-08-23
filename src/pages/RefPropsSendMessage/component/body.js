import React from 'react';
import { Input, Button } from 'antd';
import { useRef } from 'react';
import style from './index.less'
import { useEffect } from 'react';
const Body = (props) => {
    const { get_ref } = props;
    const ref_body = useRef();
    useEffect(() => {
        console.log('子组件的props', props);
    }, [])

    const btnOnclick = () => {
        console.log('日志', ref_body);
        get_ref(ref_body);
    }
    return (
        <div className={style.body}>
            <a>我是输入框</a>
            <Input placeholder='请注意这个事件' ref={ref_body}></Input>
            <Button type='primary' onClick={btnOnclick}>点击查询数据框的数据</Button>
        </div>
    )

}
export default Body;