import { useDispatch, useSelector } from "react-redux";
import Filters from "./components/Filters/Filters";
import UsersTable from "./components/UsersTable/UsersTable";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";
import { AppDispatch } from "./redux/store";
import { Alert, Container } from "@mui/material";
import { selectError } from "./redux/selectors";

const App = () => {
  const error = useSelector(selectError);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {typeof error === "string" && error! && (
        <Alert severity="error" sx={{ maxWidth: 710 }}>
          {error}
        </Alert>
      )}
      <Filters />
      <UsersTable />
    </Container>
  );
};

export default App;
