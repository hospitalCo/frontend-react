import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './registrationform.module.css';
import {post} from '../../utils/axiosConfig';

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
  const [usernameError, setUsernameError] = useState('');
  const [fullnameError, setFullNameError] = useState('');
  const [passowordError, setPasswordError] = useState('');
  const [cnfpassowordError, setCnfpasswordError] = useState('');
  const [hospitalError, setHospitalError] = useState('');
  const [supplierError, setSupplierError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [gstError, setgstError] = useState('');
  const [values, setValues] = useState({
    registerAs: 'hospital',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    hospitalName: '',
    supplierName: '',
    username: '',
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    gstin: '',
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

  const checkErrors = () => {
    const {username, address, email, fullName, gstin, hospitalName, password, phoneNumber,
      confirmPassword, supplierName, registerAs} = values;
    let hasError = false;
    if (!username) {
      setUsernameError('Provide username');
      hasError = true;
    }
    if (!address) {
      setAddressError('Provide address');
      hasError = true;
    }
    if (!password) {
      setPasswordError('Provide password');
      hasError = true;
    }
    if(!confirmPassword) {
      setCnfpasswordError('Passwords do not match')
      hasError = true;
    }
    if (confirmPassword !== password) {
      setCnfpasswordError('Passwords do not match')
      hasError = true;
    }
    if (!phoneNumber) {
      setPhoneError('Provide Phone Number');
      hasError = true;
    } else if (!(/^\d{10}$/.test(phoneNumber))) {
      setPhoneError('Invalid Phone Number');
      hasError = true;
    }
    if (!email) {
      setEmailError('Provide email')
      hasError = true;
    } else if (!verifyEmail(email)) {
      setEmailError('Invalid email')
      hasError = true;
    }
    if (!fullName) {
      setFullNameError('Provide Full Name')
      hasError = true;
    }
    if (!gstin) {
      setgstError('Provide GST Number');
      hasError = true;
    }
    if (registerAs === 'hospital') {
      if (!hospitalName) {
        setHospitalError('Provide Hospital Name');
      }
    } else {
      if (!supplierName) {
        setSupplierError('Provide Supplier Name')
        hasError = true;
      }
    }
    console.log('haserror: ', hasError);
    return hasError;
  }

  const verifyEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const registerUser = async () => {
    const {username, address, email, fullName, gstin, hospitalName, password, phoneNumber,
      registerAs, supplierName} = values;

    // check for erros
    if(checkErrors()) {
      return;
    } 

    const [first_name, last_name] = fullName.split(' ');
    const responseBody = {
      username,
      password,
      email,
      phone_number: phoneNumber,
      first_name,
      last_name,
      profiles: [{
        type: registerAs,
        name: (registerAs === 'hospital') ? hospitalName : supplierName,
        gstin,
        address,
      }],
    };
    console.log(responseBody);

    try {
      // fetch('http://localhost:8000/api/v1/users/register/', {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(responseBody)
      // })
      // .then(response => {
      //   console.log(response);
      // }, error => {
      //   console.log(error);
      // })
      const response = await post('/users/register/', responseBody);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const transformRequest = (jsonData = {}) =>
    Object.entries(jsonData)
      .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
      .join('&');

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

              <div className={styles.errorMessage}>{fullnameError}</div>
              <TextField
                value={values.fullName}
                onChange={handleChange('fullName')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Full Name"
                variant="outlined" />

              <div className={styles.errorMessage}>{usernameError}</div>
              <TextField
                value={values.username}
                onChange={handleChange('username')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined" />

              <div className={styles.errorMessage}>{passowordError}</div>
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
                  label="Password"
                />
              </FormControl>

              <div className={styles.errorMessage}>{cnfpassowordError}</div>
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
                  label="Confirm Password"
                />
              </FormControl>

              {
                (values.registerAs === 'hospital') ?
                (
                  <>
                    <div className={styles.errorMessage}>{hospitalError}</div>
                    <TextField
                      value={values.hospitalName}
                      onChange={handleChange('hospitalName')}
                      className={classes.inputBox}
                      fullWidth
                      id="outlined-basic"
                      label="Hospital Name"
                      variant="outlined" />
                  </>
                ) : (
                  <>
                    <div className={styles.errorMessage}>{supplierError}</div>
                    <TextField
                      value={values.supplierName}
                      onChange={handleChange('supplierName')}
                      className={classes.inputBox}
                      fullWidth
                      id="outlined-basic"
                      label="Supplier Name"
                      variant="outlined" />
                  </>
                )
              }

              <div className={styles.errorMessage}>{addressError}</div>
              <TextField
                value={values.address}
                onChange={handleChange('address')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined" />

              <div className={styles.errorMessage}>{phoneError}</div>
              <TextField
                value={values.phoneNumber}
                onChange={handleChange('phoneNumber')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined" />

              <div className={styles.errorMessage}>{emailError}</div>
              <TextField
                value={values.email}
                onChange={handleChange('email')}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="Email ID"
                variant="outlined" />

              <div className={styles.errorMessage}>{gstError}</div>
              <TextField
                onChange={handleChange('gstin')}
                value={values.gstin}
                className={classes.inputBox}
                fullWidth
                id="outlined-basic"
                label="GST Number "
                variant="outlined" />
              
              <Button variant="contained" color="primary" onClick={registerUser}>
                Register as {values.registerAs}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default RegistrationForm;