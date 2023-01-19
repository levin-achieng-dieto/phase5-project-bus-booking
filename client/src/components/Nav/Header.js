import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Button, Popover } from 'antd';
import "./static/header.css"
import {Link} from "react-router-dom"


const searchEngine = 'Google';

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  }
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleSelectFilter = (value, option) => {
    const optionValue = option.props['data-label'];
    return optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1;
  }

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menu = [
      <Button className="header-lang-button" ghost size="small" key="lang">
      Logout
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">
        <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="docs/spec">
        <Link to={"/home"}>DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="docs/react">
        <Link to={"/buses"}>Buses</Link>
        </Menu.Item>
        <Menu.Item key="docs/pattern">
        <Link to={"/routes"}>Routes</Link>
        </Menu.Item>
        <Menu.Item key="docs/pattern">
        <Link to={"/about"}>About</Link>
        </Menu.Item>
      
      
      </Menu>,
    ];

    return (
      <>
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
          
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={2} sm={10} xs={24}>
            <a id="logo" href='/#'>
              <img alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
            </a>
              <span>Knight Travellers</span>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
  
      </>
    );
  }
}