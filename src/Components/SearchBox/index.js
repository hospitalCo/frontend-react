import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  searchInput: {
    width: '25%',
    textAlign: 'left',
    paddingBottom: theme.spacing(2),
  },
  searchSelect: {
    width: '11%',
    textAlign: 'left',
    paddingBottom: theme.spacing(2),
  },
  searchButton: {
    padding: '15px 16px',
  },
}));

const SearchBox = ({city, searchString}) => {
  const classes = useStyles();
  const history = useHistory();
  const [cityName, setCityName] = useState(city);
  const [searchText, setSearchText] = useState(searchString);

  const searchSupplies = () => {
    history.push('/search');
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.searchSelect}>
        <InputLabel id="demo-simple-select-outlined-label">Select Location</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={cityName}
          // onChange={handleChange}
          label="Search Location"
        >
          <MenuItem value={'delhi'}>Delhi</MenuItem>
          <MenuItem value={'jaipur'}>Jaipur</MenuItem>
        </Select>
      </FormControl>
      <TextField value={searchString} className={classes.searchInput} id="outlined-basic" label="Search" variant="outlined" />
      <Button onClick={searchSupplies} className={classes.searchButton} size="large" variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBox;
