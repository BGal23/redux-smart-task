import { useDispatch, useSelector } from "react-redux";
import Filters from "./components/Filters/Filters";
import Table from "./components/Table/Table";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && "Loading..."}
      <Filters />
      <Table />
    </>
  );
};

export default App;
