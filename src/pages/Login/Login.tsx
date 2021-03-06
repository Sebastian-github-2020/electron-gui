// @ts-ignore
import styled from "styled-components";
import {Input, Form, Button, Checkbox} from 'antd'
import bgc from "../../static/images/bgc.svg"
import React, {useEffect, useState} from "react";
import logo from "../../static/images/logo.gif"
// import {apiLogin} from '../../request/api'
import {useSelector,useDispatch} from 'react-redux'
import {login} from "../../state/actions"



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

    form {
      text-align: left;
    }
  }

`;

// 登录页
const Login: React.FC = () => {

    const [form] = Form.useForm();
    const [checked, setChecked] = useState(false)

    // @ts-ignore
    const token = useSelector(state=>state.token)
    // @ts-ignore
    const dispatch = useDispatch()


    useEffect(() => {
        document.title = "登录"

    }, [])

    // 点击提交表单
    const finish = (values: any) => {
        console.log(token)
        // 校验后的数据 可以提交
        form.validateFields().then((values) => {
            console.log(values)
            // 执行请求
            // apiLogin({...values}).then((res) => {
            //     console.log(res)
            // })
            // login("Adasdgdfgashfhsdondkjsfndk")
            dispatch({
                type:login,
                payload:"登录token"
            })
        })



    }


    return (
        <DivLogin>
            <div className="login">
                <div>token:{token}</div>
                <img src={logo} width={"100px"} style={{marginBottom: "10px"}} alt={"logo"}/>
                <Form
                    form={form}
                    layout={"vertical"}
                    onFinish={finish}
                >
                    <Form.Item required={true} name={"username"}
                               rules={[{required: true, message: "用户名必填"}, {min: 5, message: "最短5位"}, {
                                   max: 20,
                                   message: "最长20位"
                               }]}>
                        <Input placeholder={"请输入用户名"} autoComplete={'off'}/>
                    </Form.Item>
                    <Form.Item required={true} name={"password"}
                               rules={[{required: true, message: "密码必填"}, {min: 5, message: "最短5位"}, {
                                   max: 20,
                                   message: "最长20位"
                               }]}>
                        <Input placeholder={"密码"} type={"password"}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>记住密码</Checkbox>
                        <a href={"#"} style={{float: 'right'}}>
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
