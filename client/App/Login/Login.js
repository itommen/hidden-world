import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { Flex } from 'reflexbox';
import { reduxForm, Field } from 'redux-form';

// TODO: maybe use it when waiting for login
// import CircularProgress from 'material-ui/CircularProgress';

const LoginForm = props =>
    <Flex column auto justify='center' align='center'>
        <form>
            <Card>
                <CardTitle title={'התחבר'} />
                <CardText>
                    <Flex column auto>
                        <Field name={'userName'}
                            component={TextField}
                            floatingLabelText={'שם משתמש'} />
                        <Field name={'password'}
                            component={TextField}
                            floatingLabelText={'סיסמא'} />
                    </Flex>
                </CardText>
                <CardActions>
                    <Flex column auto align='center'>
                        <RaisedButton
                            name={'asd'}
                            label={'התחבר'}
                            primary={true}
                            onClick={() => {
                              console.log(props);
                              debugger;
                            }
                            } />
                    </Flex>
                </CardActions>
            </Card>
        </form>
    </Flex>;

export default reduxForm({
  form: 'loginForm'
})(LoginForm);

// export default class LoginForm extends React.Component {
//     constructor() {
//         super();
//         this.updateState = this.updateState.bind(this);
//         this.onLogin = this.onLogin.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             userName: '',
//             password: ''
//         });
//     }

//     render() {
//         const { state } = this.props;
//         const loginInProgres = state === 'loginOnProgress';

//         return (
//             <Flex column auto justify="center" align="center">
//                 <Card>
//                     <CardTitle title={'התחבר'} />
//                     <CardText>
//                         <Flex column auto>
//                             <TextField
//                                 floatingLabelText="שם משתמש"
//                                 name="userName"
//                                 onChange={this.updateState}
//                                 disabled={loginInProgres}
//                             />

//                             <TextField
//                                 floatingLabelText="סיסמא"
//                                 name="password"
//                                 onChange={this.updateState}
//                                 disabled={loginInProgres}
//                             />
//                         </Flex>
//                     </CardText>
//                     <CardActions>
//                         <Flex column auto align="center">
//                             <RaisedButton
//                                 label={loginInProgres ? <CircularProgress size={20} /> : 'התחבר'}
//                                 primary={true}
//                                 disabled={loginInProgres}
//                                 onClick={this.onLogin} />
//                         </Flex>
//                     </CardActions>
//                 </Card>
//             </Flex>
//         );
//     }

//     updateState({ target }) {
//         this.setState(prev => Object.assign(prev, {
//             [target.name]: target.value
//         }));
//     }

//     onLogin() {
//         const { login } = this.props;
//         const { userName, password } = this.state;

//         login({
//             userName,
//             password
//         });
//     }
// }
