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
  const [registerAs, setRegisterAs] = useState('hospital');

  const handleChange = event => {
    setRegisterAs(event.target.value);
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
                  value={registerAs}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={'hospital'}>Hospital</MenuItem>
                  <MenuItem value={'supplier'}>Supplier</MenuItem>
                </Select>
              </FormControl>
              {
                (registerAs === 'hospital') ?
                (
                  <>
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Hospital Name" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="City" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Requirement" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Urgency" variant="outlined" />
                  </>
                ) : (
                  <>
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Supplier Name" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Company" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="City" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                    <TextField className={classes.inputBox} fullWidth id="outlined-basic" label="Supplies" variant="outlined" />
                  </>
                )
              }
              
              <Button variant="contained" color="primary">
                Register as {registerAs}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
};

export default RegistrationForm;