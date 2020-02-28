import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
  title: {
      fontSize: '30px',
  },
  space: {
      marginLeft: '20px',
      marginBottom: '20px',
  }
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: '',
    name: '',
    address: '',
    currentValue: '',
    purchasePrice: '',
    equity: '',
    mortgageTermRemaining: '',
    loanAmount: '',
    dateStarted: '',
    apr: '',
    amount: '',
    date: '',
    tenantName: '',
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const contactSubmit = () => {
    console.log("state",values);
  }
  return (
    <div className={classes.root}>
        <form onSubmit={contactSubmit}>   
            <Grid item xs={12}><Typography className={classes.title}>House Information</Typography></Grid>
            <TextField fullWidth id="houseName" label="House Name" variant="outlined" className={classes.space} onChange={handleChange('name')}/>
            <div>
                <TextField id="id" label="House ID" type="number" variant="outlined" className={classes.space} onChange={handleChange('id')}/>
                <TextField id="address" label="Address" variant="outlined" className={classes.space} onChange={handleChange('address')}/>
                <TextField id="status" label="Status" variant="outlined" className={classes.space} onChange={handleChange('status')}/>
            </div>
            <div>
                <TextField id="ytdNet" label="YTD Net" type="number" variant="outlined" className={classes.space} onChange={handleChange('ytdNet')}/>
                <TextField id="currentValue" label="Current Value" type="number" variant="outlined" className={classes.space} onChange={handleChange('currentValue')}/>
                <TextField id="purchasePrice" label="Purchase Price" type="number" variant="outlined" className={classes.space} onChange={handleChange('purchasePrice')}/>
            </div>
            <div>
                <TextField id="equity" label="Equity" type="number" variant="outlined" className={classes.space} onChange={handleChange('equity')}/>
            </div>
            <Grid item xs={12}><Typography className={classes.title}>Mortgage Information</Typography></Grid>
            <div>
                <TextField id="mortgageTermRemaining" label="Mortgage Term Remaning" type="number" variant="outlined" className={classes.space} onChange={handleChange('mortgageTermRemaining')}/>
                <TextField id="loanAmount" label="Loan Amount" type="number" variant="outlined" className={classes.space} onChange={handleChange('loanAmount')}/>
                <TextField id="dateStarted" label="Date Started" variant="outlined" className={classes.space} onChange={handleChange('dateStarted')}/>
            </div>
            <div>
                <TextField id="type" label="Type" variant="outlined" className={classes.space} onChange={handleChange('type')}/>
                <TextField id="apr" label="APR" type="number" variant="outlined" className={classes.space} onChange={handleChange('apr')}/>
            </div>
            <Grid item xs={12}><Typography className={classes.title}>Rental Information</Typography></Grid>
            <div>
                <TextField id="amount" label="Amount" variant="outlined" className={classes.space} onChange={handleChange('amount')}/>
                <TextField id="date" label="Date" variant="outlined" className={classes.space} onChange={handleChange('date')}/>
            </div>
            <Grid item xs={12}><Typography className={classes.title}>Tenant Information</Typography></Grid>
            <div>
                <TextField id="tenantName" label="Tenant Name" variant="outlined" className={classes.space} onChange={handleChange('tenantName')}/>
            </div>
            <Link to={{
                pathname: '/',
                state: {data: values}
            }}>
                <Button type="submit" variant="contained" color="primary" >
                    Save House
                </Button>
            </Link> 
        </form>
    </div>
  );
}