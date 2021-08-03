import { Container, makeStyles} from '@material-ui/core';
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
    typeMenu:{
        margin: 0,
        padding: 0,
        display:'flex'
    },
    carusel:{
        padding:'0',
        margin : '50px auto',
        width:'100%',
        height:'20%',
        backgroundColor:'red'
    },
    types:{
        padding:'0',
        margin:'0',
        display:'flex',
        justifyContent: 'space-around',
        flexWrap:'wrap',
        
    },
    type: {
        padding:'0',
        width: '45%',
        height:'100px',
        backgroundColor:'red',
        margin: '30px 0'

    },
    typesBlock:{
        marginLeft: '200px'
    },
    root: {
        display:'block',
        width:'100%',
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },

}))
const Home = () => {
const classes = useStyles();

    return (
        <>
            <Header/>
            <Container className={classes.typeMenu}>
            <Container className={classes.navMenu}></Container>
                <Container className={classes.typesBlock} >
                        <Container className={classes.carusel}>
                                Карусель
                            </Container>
                             <Container className={classes.types}>
                                <Container className={classes.type}>
                                    Man
                                </Container>
                                <Container className={classes.type}>
                                    Woman
                                </Container>
                                <Container className={classes.type}>
                                    For child
                                </Container>
                                <Container className={classes.type}>
                                    For family
                                </Container>
                            </Container>   
                    </Container>
                    
                </Container>
                
        </>
    );
};

export default Home;