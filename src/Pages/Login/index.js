import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './login.module.css';
import {post} from '../../utils/axiosConfig';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  formTitle: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  inputBox: {
    width: '100%',
    textAlign: 'left',
    paddingBottom: theme.spacing(2),
  }
}));

const Login = () => {
  const classes = useStyles();
  const [loginFormValues, setLoginFormValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = prop => event => {
    setLoginFormValues({ ...loginFormValues, [prop]: event.target.value });
  };

  const loginUser = (username, password)  => {
    try {
      post('/users/login/', {...loginFormValues})
      .then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.formContainer} variant="outlined">
        <CardContent>
          <div className={classes.formTitle}>Login Form</div>
            <form>
              <TextField
                value={loginFormValues.username}
                onChange={handleChange('username')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Username" 
                variant="outlined" />
              <TextField
                value={loginFormValues.password}
                onChange={handleChange('password')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                type="password"
                label="Password"
                variant="outlined" />
              
              <Button variant="contained" color="primary" onClick={loginUser}>
                Login as {loginFormValues.loginAs}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default Login;
