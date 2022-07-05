import React, { useEffect } from 'react';
import moment from 'moment';
import { Statistic } from 'antd';
import styles from './index.less'

const Time = (props) => {
    const { Countdown } = Statistic;
    //  毫秒 -  秒 - 分 - 小时   给时间成了2 表示两天后 +  30毫妙    30*1000 
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2  // Moment is also OK
    const onFinish = () => {
        console.log('finished!');
    };
    useEffect(() => {
        console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
        console.log((moment(deadline).format('YYYY-MM-DD HH:mm:ss')));
    }, [])

    return (
        <div className={styles.root}>
            {/* 时间倒计时  距离目标如期还有多少时间 */}
            <div>
                <div>时间倒计时  距离目标如期还有多少时间  </div>
                <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
            </div>
            <div>
                <div>系统关闭时间倒计时</div>
                <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
            </div>

        </div>
    );
};

export default Time;