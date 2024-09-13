import { useDispatch, useSelector } from "react-redux";
import Filters from "./components/Filters/Filters";
import UsersTable from "./components/UsersTable/UsersTable";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";
import { selectIsLoading } from "./redux/selectors";
import { AppDispatch } from "./redux/store";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && "Loading..."}
      <Filters />
      <UsersTable />
    </>
  );
};

export default App;
