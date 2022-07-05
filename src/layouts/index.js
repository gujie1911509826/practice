/* eslint-disable jsx-a11y/alt-text */
import styles from './index.less';
import { Menu, Icon, Button } from 'antd';
const BasicLayout = (props) => {
  const { SubMenu } = Menu;
  const handleClick = (e) => {
    var { history } = window;
    props.history.push(e.key);
  }
  return (
    <>
      {/* 头部 系统名称 以及loign信息 */}
      <div className={styles.title_login}>
        <div><img src='https://ssodr.iwhalecloud.com:40083/login/static/theme/zmp/logoB.png' style={{ "width": "100px" }}></img></div>
        <div>iwhalecloud系统</div>
        <div className={styles.message}>  
          <div>帮助文档</div>
          <div className={styles.login_message}></div>
          <div>郭杰</div>
        </div>
      </div>
      {/* 左右布局  菜单栏加主体 */}
      <div className={styles.normal}>
        <div className={styles.left_menu}>
          <Menu
            onClick={handleClick}
            className={styles.menu_className}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>第一天学习的目录</span>
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="戏耍antd">
                <Menu.Item key="time">时间</Menu.Item>
                <Menu.Item key="table">表格</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu title="系统基础">
              <Menu.Item key='home'>home</Menu.Item>
              <Menu.Item key='login'>login</Menu.Item>
              <Menu.Item key='index'>Index</Menu.Item>
            </SubMenu>

          </Menu>
        </div>
        <div className={styles.right_countent}>
          {props.children}
        </div>
      </div>
    </>

  );
}

export default BasicLayout;
