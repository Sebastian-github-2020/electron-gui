import {useEffect,useState} from 'react'
import {Layout,Menu} from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
const {Header,Content,Sider} = Layout

const Home = () => {
    const [menuData] = useState([
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
            children:[
                {
                    key:'1-1',
                    label:"子集"
                }
            ]
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
            children: [
                {
                    label: '子集2',
                    key:'2-1'
                }
            ]
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            children: [
                {
                    label: '子集3',
                    key:'3-1'
                }
            ]
        },
    ])


    useEffect(() => {
        document.title = "首页"
    }, [])
    return (
        <Layout style={{height:'100%'}}>
           <Sider>
               {/*logo*/}
               <div className={"logo"} style={{height:'64px',backgroundColor:'#334454',margin:'10px'}}>
                   <img src={require('../static/images/logo.gif')}  style={{height:'100%'}} alt=""/>
               </div>
           {/*    菜单*/}
               <Menu
                   theme={"dark"}
                   mode="inline"
                   defaultSelectedKeys={['1']}
                   style={{height:'100%'}}
                   items={menuData}
               />
           </Sider>
            <Layout>
                <Header style={{background:'#fff'}}>顶部</Header>
                <Content style={{background:'#F0F2F5',padding:'24px'}}>
                    <div style={{background:'#fff',height:'100%'}}>

                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
export default Home
