import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // marginLeft: '300px',
    float: "flexable",
  },
  toolbar: theme.mixins.toolbar,
}));

export default function HouseList(props) {
  const [houseData] = useState(
      [
        {
            //////house info
            id: 1,
            name: 'my first house',
            address: '27 great st, CA, US, 95120',
            status: 'rented',
            ytdNet: 4540,
            currentValue: 123333,
            purchasePrice: 600343,
            equity: 700343,
            //// mortgage info
            mortgageTermRemaining: 108, //months
            loanAmount: 454544,
            dateStarted: '15 Jun 2015',
            type: '15 year fixed',
            apr: 4.75,
            ///////////rental info
            amount: 4000,
            date: new Date('15 Jan 2020'),
            //////tenant info
            tenantName: 'Another tenant'
        }, 
        {
            id: 2,
            name: 'my second house',
            address: '1, cool st, NV, US',
            status: 'not rented',
            ytdNet: 4544,
            currentValue: 250000,
            purchasePrice: 600343,
            equity: 700343,
            mortgageTermRemaining: 68, //months
            loanAmount: 250000,
            dateStarted: '23 Jan 2018',
            type: '30 year fixed',
            apr: 3.75,
            amount: 3000,
            date: new Date('14 Jan 2020'),
            tenantName: 'great tenant',
        }
    ]);

    if(props.location.state){
        const datas = props.location.state.data;
        houseData.push(datas);
    };
    console.log("sssss",houseData);
  const classes = useStyles();
  const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '100%', height: 'auto',padding: '20px' },
    borderColor: 'text.primary',
  };
  return (
    <div className={classes.root}>
        <Typography className={classes.title}>
            All Your Houses
        </Typography>
        {houseData.map((data) => {
            return(
                <Box xs={12} justifyContent="center" border={1} key={data.id} {...defaultProps} >
                    <Grid item container spacing={2}>
                        <Grid item sm={12} md={3} lg={3}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={require('./house.jpg')} />
                            </ButtonBase>
                        </Grid>
                        <Grid item sm={12} md={7} lg={7}>
                            <Grid item xs container direction="column"> 
                                <Typography gutterBottom variant="subtitle1">
                                Address: {data.address}({data.name})
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                Statue: {data.status}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                YTD Net: ${data.ytdNet}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                Mortgage Term Remaining: {data.mortgageTermRemaining} months
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={2} lg={2} style={{paddingTop: '150px'}}>
                            <Link to={{
                                pathname: '/detail/' + data.id,
                                state: {data: data}
                            }}>
                                <Button variant="contained" color="primary" >
                                    View Detail
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            );
        })}
        <Grid item style={{marginTop: '70px',float: 'right'}}>
            <Link to={ '/add'}>
                <Button variant="contained" color="primary" >
                    Add House
                </Button>   
            </Link>
        </Grid>
    </div>
  );
}
