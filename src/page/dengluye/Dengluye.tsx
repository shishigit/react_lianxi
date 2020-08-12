import {Button, Card, Form, Input} from "antd";
import React from "react";
import './Dengluye.css'
import Meta from "antd/es/card/Meta";
import {browserHistory} from "../../gongju/gongju";


interface zhuangtai
{
    dengluxinxi: {
        zhanghao: string,
        mima: string
    }
}

export class Dengluye extends React.Component<any, zhuangtai>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            dengluxinxi: {
                zhanghao: 'ceshi',
                mima: 'ceshi'
            }
        }
    }

    render(): React.ReactNode
    {
        return (
            <div className='beijing'>
                <Card
                    style={{width: 300}}
                    actions={[<Button type="primary" style={{width: '95%'}} onClick={() =>
                    {
                        // window.location.href = '/zhuye'
                        browserHistory.push('/zhuye')
                    }}>登录</Button>]}
                >
                    <Meta title="测试" description="测试测试测试"/>

                    <Form labelCol={{span: 4}} wrapperCol={{span: 20}} style={{marginTop: '50px'}}>
                        <Form.Item label="帐号">
                            <Input value={this.state.dengluxinxi.zhanghao} onChange={(event) =>
                            {
                                this.state.dengluxinxi.zhanghao = event.target.value
                                this.setState({...this.state})
                            }}/>
                        </Form.Item>
                        <Form.Item label="密码">
                            <Input.Password value={this.state.dengluxinxi.mima} onChange={(event) =>
                            {
                                this.state.dengluxinxi.mima = event.target.value
                                this.setState({...this.state})
                            }}/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

