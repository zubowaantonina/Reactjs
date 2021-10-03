import { DOG_API_URL, setData, setError, setLoading } from "./dogSlice";

export const getDogPhoto = () => async (dispatch, getState) => {
  const {
    dogs: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(DOG_API_URL);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.json();

      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};