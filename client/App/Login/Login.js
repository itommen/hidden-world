import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Redirect } from 'react-router';
import { Flex } from 'reflexbox';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class LoginForm extends React.Component {
    constructor() {
        super();
        this.updateState = this.updateState.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        this.setState({
            userName: '',
            password: ''
        });
    }

    render() {
        const { state } = this.props;
        const loginInProgres = state === 'loginOnProgress';

        return (
            <Flex justify="center" align="center">
                <Card>
                    <Flex column>
                        <CardHeader>
                            התחבר
                    </CardHeader>
                        <CardText>
                            <Flex column>
                                <TextField
                                    floatingLabelText="שם משתמש"
                                    name="userName"
                                    onChange={this.updateState}
                                    disabled={loginInProgres}
                                />

                                <TextField
                                    floatingLabelText="סיסמא"
                                    name="password"
                                    onChange={this.updateState}
                                    disabled={loginInProgres}
                                />

                                <RaisedButton
                                    label={loginInProgres ? <CircularProgress size={20} /> : 'התחבר'}
                                    primary={true}
                                    disabled={loginInProgres}
                                    onClick={this.onLogin} />
                            </Flex>
                        </CardText>
                    </Flex>
                </Card>
            </Flex>
        );
    }

    updateState({ target }) {
        this.setState(prev => Object.assign(prev, {
            [target.name]: target.value
        }));
    }

    onLogin() {
        const { login } = this.props;
        const { userName, password } = this.state;

        login({
            userName,
            password
        });
    }
}