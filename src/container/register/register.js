import React from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component {

    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>Register Page</h2>
                <WingBlank>
                    <Button type='primary'></Button>
                    <WhiteSpace/>
                    <Button type='primary'></Button>
                </WingBlank>
            </div>
        )

    }
}

export default Register