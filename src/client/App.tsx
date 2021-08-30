/*
 * @description
 * @file        /bce-sdk-js-demo/src/client/App.tsx
 * @author      lurunze@baidu.com
 */
import React from 'react';
import axios from 'axios';
import copy from 'copy-to-clipboard';

import {render as amisRender, Layout, InputBox, Button} from 'amis';


const GeneralLayout: React.FC = ({}) => {
  return amisRender(
    {
      type: 'page',
      title: 'AMIS组件梳理',
      aside: [
        {
          type: 'tpl',
          tpl: '侧边栏',
        },
      ],
      toolbar: [
        {
          type: 'tpl',
          tpl: 'toolbar',
        }
      ],
      body: [
        {
          type: 'tpl',
          tpl: 'body',
        }
      ],
    },
    {},
    {}
  )
}

class InputRender extends React.Component<any, any> {
  render() {
    return amisRender(
      {
        "name": "输入框",
        "type": "input-text",
        "label": "text"
      },
      {
        value: '123',
      },
      {
        theme: 'cxd'
      }
    )
  }
}

class APP extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <Layout
          header={<h1>AMIS组件梳理</h1>}
          children={
            <React.Fragment>
            <InputBox
              theme="cxd"
              children={<Button>who</Button>}
              placeholder='请输入文字123'
            />
            </React.Fragment>
          }
        />
      </React.Fragment>
    );
  }
}

export default APP;
