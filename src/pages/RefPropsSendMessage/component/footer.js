import React from 'react';
import style from './index.less'
import { Rate } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
const Footer = (props) => {

    const [num, setNum] = useState(props?.num);
    useEffect(() => {
        console.log('我是底部接受的数据', props);
        setNum(props.num)
    }, [props])

    return (
        <div className={style.footer}>
            <Rate  value={num} />
           <div style={{fontSize:'50px',color:'red'}}>{num}</div> 
        </div>
    )

}
export default Footer;