import React, { useMemo, useState } from 'react';
import { memo } from 'react';
import { useEffect } from 'react';
import Body from './component/body';
import Footer from './component/footer';
import Heaad from './component/head';
const Index = (props) => {
    const [refData, setRefData] = useState();
    const [num,setNum] = useState(2);
    useEffect(() => {
console.log('我是主页面重新渲染了',refData);
    }, [refData])

    const get_ref = (ref) => {
        console.log("父页面获取ref", ref);
        setRefData(ref);
        setNum(ref?.current?.state?.value);
        }   
    return (
        <>
            <Heaad refData={refData} ></Heaad>
            <Body get_ref={get_ref}></Body>
            <Footer num={num}></Footer>
        </>


    )

}
export default memo(Index);