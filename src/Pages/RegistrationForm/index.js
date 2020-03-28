import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './registrationform.module.css';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

const RegistrationForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    registerAs: 'hospital',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowCnfPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.formContainer} variant="outlined">
        <CardContent>
          <div className={classes.formTitle}>Registration Form</div>
            <form>
              <FormControl variant="outlined" className={classes.inputBox}>
                <InputLabel id="demo-simple-select-outlined-label">Register as</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={values.registerAs}
                  onChange={handleChange('registerAs')}
                  label="Register as"
                >
                  <MenuItem value={'hospital'}>Hospital</MenuItem>
                  <MenuItem value={'supplier'}>Supplier</MenuItem>
                </Select>
              </FormControl>

              <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
              <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Username" variant="outlined" />

              <FormControl fullWidth className={classes.inputBox} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              <FormControl fullWidth className={classes.inputBox} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showConfirmPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCnfPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              {
                (values.registerAs === 'hospital') ?
                (
                  <>
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Hospital Name" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Address" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                  </>
                ) : (
                  <>
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Supplier Name" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Address" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                  </>
                )
              }

              <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="GST Number " variant="outlined" />
              
              <Button variant="contained" color="primary">
                Register as {values.registerAs}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default RegistrationForm;