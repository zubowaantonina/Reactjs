import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
 text: {fontSize:"20px",
 textAlign:"center",
 marginLeft:"350px",
 marginTop:"100px"
}
 
 
}));

const Home = () => {
  const classes = useStyles();
    return(<div className={classes.text}>Домашняя страница</div>)
  };
  
  export default Home;