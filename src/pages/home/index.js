/* eslint-disable react-hooks/exhaustive-deps */
import {Drawer} from 'antd'
import React, {useState, useRef, useEffect} from "react";

function Index() {
    const [currentRight, setCurrentRight] = useState(0);
    const [currentTop, setCurrentTop] = useState(0);
    let right = 0;
    let top = 0;
    let innerRight = 0;
    let innerTop = 0;
    useEffect(() => {
        // const bodyDom = document.body;
        // const drawerDom = document.querySelector('.drawer-wrapper-lwf')
        // console.log(drawerDom);
        
        // bodyDom.ondragover = (e) => {    
        //     e.preventDefault();
        // }
        // drawerDom.draggable = true;
        // drawerDom.ondragstart = (e) => {
        //     innerRight = bodyDom.clientWidth - e.clientX - right;
        //     innerTop = e.clientY - top;
        //     console.log('bodyDom.clientWidth', bodyDom.clientWidth)
        //     console.log('e.clientX', e.clientX);
        //     console.log('e.clientY', e.clientY)
        //     console.log('innerRight', innerRight);
        //     console.log('innerTop', innerTop)
        // }
        // drawerDom.ondragend = (e) => {
        //     console.log(e);
        //     right = bodyDom.clientWidth - e.clientX - innerRight;
        //     top = e.clientY - innerTop;
        //     setCurrentRight(right);
        //     setCurrentTop(top)
        // }
        // /** 组件销毁时去除监听 */
        // return ()=>{
        //     bodyDom.ondragover = null;
        // }
    }, [])

    const onDragEnd = (e) => {
        e.preventDefault();
    }

    console.log(currentRight, currentTop)

    return (
        <div className="App">
            <div className={'drawer-content'}>
                <Drawer
                    mask={false}
                    title={'1122'}
                    placement={'right'}
                    visible={true}
                    getContainer={document.body}
                    style={{
                        position: 'absolute',
                        height: 100,
                        right: currentRight,
                        top: currentTop,
                    }}
                    className='drawer-wrapper-lwf'
                >
                    <div
                        className={'inner-content'}
                    >
                        这是右侧抽屉的主体部分
                    </div>

                </Drawer>
            </div>

        </div>
    );
}

export default Index;
