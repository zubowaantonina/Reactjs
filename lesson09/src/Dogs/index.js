import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {getDogPhoto} from './actions'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    minWidth: "800px",
    minHeight: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  catImg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFDEAD",
  },
}));


const Dogs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dogs);

  console.log(data, loading, error);

  const getThunkDogPhoto = useCallback(
    () => dispatch(getDogPhoto()),
    [dispatch]
  );

  useEffect(() => {
    getThunkDogPhoto();
  }, [getThunkDogPhoto]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && data && (
          <img className={classes.catImg} src={data.message} alt="Dog" />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkDogPhoto()}
      >
        Покажи Пёсика
      </Button>
    </div>
  );
};

export default Dogs;
