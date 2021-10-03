import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  text: {
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    //  textAlign:"center",
    // paddingLeft: "350px",
    paddingTop: "100px",
    margin:"0 auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.text}>Домашняя страница</div>;
};

export default Home;
