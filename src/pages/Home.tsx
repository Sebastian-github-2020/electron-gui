import {useEffect, useState} from 'react'
import {Layout, Menu} from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Outlet, useNavigate} from "react-router-dom";



const {Header, Content, Sider} = Layout

const Home = () => {
    const [menuData] = useState([
        {
            key: 'free',
            icon: <UserOutlined/>,
            label: '优惠',
            children: [
                {
                    key: 'free-code',
                    label: "优惠核销"
                }
            ]
        },
        {
            key: 'edit',
            icon: <VideoCameraOutlined/>,
            label: '编辑',
            children: [
                {
                    label: '文案编辑器',
                    key: 'copy-edit'
                }
            ]
        },
        {
            key: '3',
            icon: <UploadOutlined/>,
            label: '待开发',
            children: [
                // {
                //     label: '子集3',
                //     key:'3-1'
                // }
            ]
        },
    ])
    const navigate = useNavigate()
    const menuClick = (item: any) => {
        const keys:{[key:string]:string} = {
            "free-code": "",
            "copy-edit": "editor"
        };


        const {key} = item;

        navigate(keys[key])
    }

    useEffect(() => {
        document.title = "首页"
    }, [])
    return (
        <Layout style={{height: '100%'}}>
            <Sider>
                {/*logo*/}
                <div className={"logo"} style={{height: '64px', backgroundColor: '#334454', margin: '10px'}}>
                    <img src={require('../static/images/logo.gif')} style={{height: '100%'}} alt=""/>
                </div>
                {/*    菜单*/}
                <Menu
                    theme={"dark"}
                    mode="inline"
                    defaultSelectedKeys={['edit','editor']}
                    // openKeys={['edit','editor']}
                    style={{height: '100%'}}
                    items={menuData}
                    onClick={menuClick}
                />
            </Sider>
            <Layout>
                <Header style={{background: '#fff'}}>顶部</Header>
                <Content style={{background: '#F0F2F5', padding: '24px'}}>
                    <div style={{background: '#fff', height: '100%'}}>
                        <Outlet/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
export default Home
