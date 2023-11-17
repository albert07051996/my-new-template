import './index.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Header} from '../Header/Header'
import React, { useState, useEffect } from 'react';
import { Image } from 'antd';

const {  Content, Footer } = Layout;


export const  TopBar2 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      
        <Header/>
      {/* <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header> */}
      <Content className='content' 
    //    style={{ padding: '0 50px' }}
       >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
       
        {/* <img width={100} src="https://lh3.googleusercontent.com/pw/ADCreHeUXAtOlKk83MqgtJoVE6vboaIH3eFxjwQqn_FX6xnGr2fnjwFwyRJZPnd3LBOZR9pevF355AFQXwX15JJ7YpU4jy77SmXDICJUQf1-U6dg6D44010=w600-h315-p-k"></img> */}
        <Image   width={200} src='https://lh3.googleusercontent.com/pw/ADCreHdbW05q-xiAXcgRsL82Aod7RMeFjVR0ngtOnwHmyaSpk04ITu2QGyYoU7u-VGVyq1Y_Y_fjWm1SxLUvP7miODzU49zjEltbkM6DGKzQI84XEf2iz-A=w2400?source=screenshot.guru'/>

        <div className='ant-layout-content-div' style={{ padding: 24,  background: colorBgContainer }}>Content
        
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
          
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
          
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent    ContentContentContentContentContent
     tContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent    ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
          
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent    ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
          
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent    ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
          
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  
        ContentContentContentContentContent
        ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent  ContentContentContentContentContent
        </div>
      </Content>
      <Footer className='footer' style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

