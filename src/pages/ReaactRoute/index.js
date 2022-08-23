import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './index.less'
import { Button } from 'antd';
import RefPropsSendMessage from '../RefPropsSendMessage';
class Index extends Component {
    handlerClick = () => {
        console.log('点击',this.props.match.url);
    }
    render() {
        return (
            <div className={style.root}>
                <div className={style.head}>学习路由的第一天</div>
                <div><Link to='/HookStudy'>HookStudy</Link></div>
                <div><Link to='/RefPropsSendMessage'>RefPropsSendMessage</Link></div>
                <div><Button type='primary' onClick={this.handlerClick}>跳转</Button></div>

            </div>

        );
    }
}

export default Index;