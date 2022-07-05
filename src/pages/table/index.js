/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Table } from 'antd';
import styles from './index.less'
import { dataSource } from './const'
import Table_Modal from './Modal/index';
const Table_com = () => {
    // 弹窗显隐
    const [visable, setVisable] = useState(false);
    // table数据集
    const [dataList, setDateList] = useState(dataSource);
    // Modal 入参
    const [params, setParams] = useState({});
    //函数模块
    const onHandler = (row) => { setVisable(true); setParams(row); }
    const func_Modal = () => setVisable(false);

    const columns = [
        {
            title: '员工姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '员工工号',
            dataIndex: 'num',
            key: 'num',
        },
        {
            title: '员工邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '职级',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: '状态',
            dataIndex: 'statue',
            key: 'statue',
        }, {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
            render: (text, row) => {

                return <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: "nowrap" }}>
                    <a onClick={() => onHandler(row)}>详情</a>
                    <a onClick={() => onHandler(row)}>修改</a>
                    <a onClick={() => onHandler(row)}>删除</a>
                </div>
            }
        }

    ];


    return (
        <div className={styles.root}>
            <Table className={styles.table_className} dataSource={dataList} columns={columns} />
            {visable && <Table_Modal params={params || {}} ModalCallBack={func_Modal} visible_props={visable}></Table_Modal>}
        </div>
    );
};

export default Table_com;