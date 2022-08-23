/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import UserContent from './component/userContent';
import style from './index.less';
import myContentText from './component/tempUserContent';
const Index = (props) => {
    const [bool, setBool] = useState(true);
    const [text, setText] = useState('我是来学习HOOK的');
    // 点击测试useState
    const change_onClick = () => {
        bool ?
            setText("我改变了", setBool(false))
            :
            setText("我是来学习HOOK的", setBool(true))
    }
    return (
        <>
            {/* useState的使用 */}
            <div onClick={change_onClick}>
                <div className={style.head}>{text}</div>
            </div>
            {/* useContent的使用 */}
            <div>
                <div className={style.head}>userContent的使用</div>
                <myContentText.Provider value={text}>
                    <UserContent></UserContent>
                </myContentText.Provider>

            </div>
        </>

    );
}

export default (Index);