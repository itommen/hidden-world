import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Redirect } from 'react-router';
import { Flex } from 'reflexbox';

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
            <Flex column auto justify="center" align="center">
                <Card>
                    <CardTitle title={'התחבר'} />
                    <CardText>
                        <Flex column auto>
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
                        </Flex>
                    </CardText>
                    <CardActions>
                        <Flex column auto align="center">
                            <RaisedButton
                                label={loginInProgres ? <CircularProgress size={20} /> : 'התחבר'}
                                primary={true}
                                disabled={loginInProgres}
                                onClick={this.onLogin} />
                        </Flex>
                    </CardActions>
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