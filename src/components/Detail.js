import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: '100%',
    height: '200px',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
      fontSize: '40px',
      textAlign: 'center',
  },
  Grid: {
        padding: '20px',
  }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props; 
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={2}>{children}</Box>}
      </Typography>
    );
  }

export default function Detail(props) {
  const classes = useStyles();
  const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '100%', height: 'auto',padding: '20px' },
    borderColor: 'text.primary',
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const datas = props.location.state.data;

  return (
    <div className={classes.root} style={{padding:'40px'}}>
        <Typography className={classes.title}>
            Detail About {datas.name}
        </Typography>
     
        <Box xs={12} justifyContent="center" border={1} key={datas.id} {...defaultProps} >
            <Grid item container spacing={2}>
                <Grid item sm={12} md={3} lg={3}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={require('./house.jpg')} />
                    </ButtonBase>
                </Grid>
                <Grid item sm={12} md={7} lg={7}>
                    <Grid item xs container direction="column"> 
                        <Typography gutterBottom variant="subtitle1">
                        Address: {datas.address}({datas.name})
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        Statue: {datas.status}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        YTD Net: ${datas.ytdNet}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                        Mortgage Term Remaining: {datas.mortgageTermRemaining} months
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
            >
                <Tab  label="Details" />
                <Tab  label="Rental" />
            </Tabs>
            <TabPanel value={value} index={0}>        
                <Box xs={12} justifyContent="center" border={1} {...defaultProps} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography style={{fontSize:'20px'}}>Financial Details</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography style={{fontSize:'18px',fontWeight: 'bold'}}>Value:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>Current:  ${datas.currentValue}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>Purchase Price:  ${datas.purchasePrice}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography>Equity:  ${datas.equity}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography style={{fontSize:'18px',fontWeight: 'bold'}}>Mortgage:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>Loan Amount:  ${datas.loanAmount}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography>Date Started:  {datas.dateStarted}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography>APR:  {datas.apr}%</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography>Type:  {datas.type}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                
            </TabPanel>
        </Paper>
    </div>
  );
}



