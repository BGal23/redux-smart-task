import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading } from "../../redux/selectors";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const UsersTable = () => {
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 190 },
    { field: "username", headerName: "User Name", width: 160 },
    { field: "email", headerName: "Email", width: 210 },
    { field: "phone", headerName: "Phone", width: 180 },
  ];

  return (
    <>
      <Paper sx={{ width: 740 }}>
        <DataGrid
          rows={filter}
          columns={columns}
          sx={{ border: 0, width: 740.1 }}
          autoHeight={true}
          hideFooter={true}
          loading={isLoading}
          showCellVerticalBorder={true}
          showColumnVerticalBorder={true}
          localeText={{
            noRowsLabel: "No results found.",
          }}
        />
      </Paper>
    </>
  );
};

export default UsersTable;
