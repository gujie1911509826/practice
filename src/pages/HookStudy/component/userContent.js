import React, { memo, useContext } from 'react';
import { useEffect } from 'react';
import myContentText from './tempUserContent';
import style from './index.less'
import { useMemo } from 'react';
const UserContent = (props) => {
    useEffect(() => {
        console.log('子组件的props', props);
    })
    const text = useContext(myContentText);
    useEffect(() => {
        console.log('日志', text);
    }, [])
    const Test = memo((props) => {
        console.log('我是test组件的props', props);

        return (<div>我是测试数据</div>)
    })
    const test = <div>我是测试数据2</div>
    return (
        <div className={style.study}>
            {text}
            <Test test='test组件' />
            {test}
        </div>
    );
}

export default memo(UserContent);