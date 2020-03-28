import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './login.module.css';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
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
    loginAs: 'hospital',
    username: '',
    password: '',
  });

  const handleChange = prop => event => {
    setLoginFormValues({ ...loginFormValues, [prop]: event.target.value });
  };

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.formContainer} variant="outlined">
        <CardContent>
          <div className={classes.formTitle}>Login Form</div>
            <form>
              <FormControl variant="outlined" className={classes.inputBox}>
                <InputLabel id="demo-simple-select-outlined-label">Login as</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={loginFormValues.loginAs}
                  onChange={handleChange('loginAs')}
                  label="Age"
                >
                  <MenuItem value={'hospital'}>Hospital</MenuItem>
                  <MenuItem value={'supplier'}>Supplier</MenuItem>
                </Select>
              </FormControl>
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
              
              <Button variant="contained" color="primary">
                Login as {loginFormValues.loginAs}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default Login;
