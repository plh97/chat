import { Layout,Input } from 'antd';
import React from 'react';
const { Sider } = Layout;
import  './index.scss';


export default class MySider extends React.Component {
  constructor (props) {
    super(props)
  }
  render(props){
    return(
      <Sider className="sider"  theme="light">
        <Input.Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <div className="list-container">
          <div className="list">群1</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
          <div className="list">好友</div>
        </div>
      </Sider>
    )
  }
};
