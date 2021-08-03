import { Container, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import Header from './Header';

const useStyles = makeStyles ((theme) =>({
    navMenu:{
        margin: 0 ,
        backgroundColor:'red',
        boxShadow:'' , 
        width:'25%', 
      backgroundColor: 'blue',
      height:'100vh',
    },
    profileMenu:{
        width: '100%',
        margin: 0 ,
        padding: 0,
        display:'flex',
        justifyContent:'space-benween'

    },
    root: {
        display:'block',
        width:'100%',
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      profileBlock:{
          margin: '0',
          padding:'0',
          marginRight:'0',
          backgroundColor:'blue',
          width:'20%',
      }

}))
const Profile = () => {
const classes = useStyles();

    return (
        <>
        <Header/>
        <Container className={classes.profileMenu}>
        <Container className={classes.navMenu}></Container>   
            <Container className={classes.profileBlock}>Hello</Container>     
            </Container>
            
    </>
    );
};

export default Profile;