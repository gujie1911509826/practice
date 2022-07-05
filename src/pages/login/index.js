/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const  Index = (props)=> {
    const [ bool , setBool] = useState(true);
    const [ text , setText ] = useState('我是文本');
    return (
        <div onClick={()=>bool?setText("我改变了",setBool(false)):setText("我是文本",setBool(true))}>
            {text}
        </div>
    );
}

export default Index;