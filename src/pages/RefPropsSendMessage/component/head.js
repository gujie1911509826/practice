/* eslint-disable react/jsx-no-undef */
import React from 'react';
import style from './index.less'
import { Rate,Input } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
const Head = (props) => {
    const { refData } = props;
    const [num, setNum] = useState(2);
    useEffect(() => {
        console.log('我是头部接受的数据', props,refData?.current);
        setNum(refData ? refData?.current?.state?.value : 2);
    }, [props])

    return (
        <div className={style.head}>
            <Input status="warning" placeholder="Warning" value={'我是来学习组件之间的传值的'}/>
            <Rate  value={num} />
        </div>
    )

}
export default Head;