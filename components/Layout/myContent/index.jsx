import { Layout } from 'antd';
import React from 'react';
const { Content, Footer } = Layout;
import  './index.scss';


export default class MySider extends React.Component {
  constructor (props) {
    super(props)
  }
  render(props){
    return(
      <Content className="content">
        Content
        <Footer className="footer">Footer</Footer>
      </Content> 
    )
  }
};
