import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { Redirect } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const flexStyle = { display: 'flex', flex: 'row', justifyContent: 'center' };

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
            <div style={{ display: 'flex',height: '100vh', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{flex: 0.2}}> </div>
                <Card style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <CardHeader>
                        התחבר
                    </CardHeader>
                    <CardText style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
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
                    </CardText>
                </Card>
                <div style={{flex: 1}}></div>
            </div>
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