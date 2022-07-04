// @ts-ignore
import styled from "styled-components";
import {Input, Form, Button, Checkbox} from 'antd'
import bgc from "../../static/images/bgc.svg"
import React, {useEffect, useState} from "react";
import logo from "../../static/images/logo.gif"

const DivLogin = styled.div`
  background: url(${bgc}) center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  position: relative;

  .login {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    //background-color: red;
    width: 300px;
    height: 550px;
    form{
      text-align: left;
    }
  }

`;

// 登录页
const Login: React.FC = () => {
    const [form] = Form.useForm();
    const [checked,setChecked] = useState(false)
    useEffect(() => {
        document.title = "登录"
    }, [])

    const finish = (values: any) => {
        // 校验后的数据 可以提交
        form.validateFields().then((values)=>{
            console.log(values)
        })
    }
    return (
        <DivLogin>
            <div className="login">
                <img src={logo} width={"100px"} style={{marginBottom: "10px"}} alt={"logo"}/>
                <Form
                    form={form}
                    layout={"vertical"}
                    onFinish={finish}
                >
                    <Form.Item required={true} name={"username"} rules={[{required: true,message: "用户名必填"},{min:8,message:"最短8位"},{max:20,message:"最长20位"}]}>
                        <Input placeholder={"请输入用户名"}/>
                    </Form.Item>
                    <Form.Item required={true} name={"pwd"} rules={[{required: true,message: "密码必填"},{min:8,message:"最短8位"},{max:20,message:"最长20位"}]}>
                        <Input placeholder={"密码"} type={"password"}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox checked={checked} onChange={()=>setChecked(!checked)}>记住密码</Checkbox>
                        <a  style={{float:'right'}} href="">
                            忘记密码
                        </a>
                    </Form.Item>
                    <Form.Item required={true}>
                        <Button type={"primary"} htmlType={"submit"} style={{width: "100%"}}>登录</Button>

                    </Form.Item>
                </Form>
            </div>
        </DivLogin>
    )
}
export default Login
