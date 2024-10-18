import { Layout, Menu } from 'antd';
import {
    BarsOutlined,
    SearchOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { useState } from 'react';

const { Sider } = Layout;

function Sidebar() {
      const [state, setState] = useState({
            collapsed: false,
        })
        const toggle = () => {
            setState({
                collapsed: !state.collapsed,
            });
        };
      return (
            <>
                  <div>

                        <Sider trigger={null} collapsible collapsed={state.collapsed}  style={{ height: '100%' }}>
                              <div className="text-right pr-2" onClick={toggle}><BarsOutlined style={{ cursor: 'pointer', color: '#fff', fontSize: 25 }} /></div>

                              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                    <Menu.Item key="1" icon={<PlusOutlined style={{ fontSize: 20 }} />} >
                                          <span className="mb-2">Create task</span>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: 20 }} />}>
                                          Search
                                    </Menu.Item>

                              </Menu>
                        </Sider>
                  </div>
            </>
      )
}
export default Sidebar;