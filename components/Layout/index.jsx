import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
const { Header, Footer, Sider, Content } = Layout;
import 'antd/dist/antd.css';
import  './index.scss';

import MySider from './mySider';
import MyContent from './myContent';

export default class MyLayout extends React.Component {
  constructor (props) {
    super(props)
  }
  render(props){
    return(
      <Layout className="layout" >
        <Header className="header">
          头部信息
        </Header>
        <Layout className="layout">
          <MySider />
          <MyContent />
        </Layout>
      </Layout>
    )
  }
};
