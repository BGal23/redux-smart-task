import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading } from "../../redux/selectors";
import { Box, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useRef, useState } from "react";

const UsersTable = () => {
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const tableRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && tableRef.current.scrollLeft > 0) {
        setIsScrolling(true);
      }
    };

    const currentRef = tableRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 190 },
    { field: "username", headerName: "User Name", width: 160 },
    { field: "email", headerName: "Email", width: 210 },
    { field: "phone", headerName: "Phone", width: 180 },
  ];

  return (
    <Box ref={tableRef} sx={{ overflowX: "auto", width: "100%" }}>
      <Paper sx={{ width: 740, margin: "0 auto" }}>
        <DataGrid
          rows={filter}
          columns={columns}
          sx={{ border: "1 solid grey", width: 743 }}
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
      <Typography
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "0.5rem",
          background: "lightgrey",
          borderRadius: 40,
          opacity: "0.8",
          display: { xs: !isScrolling ? "flex" : "none", sm: "none" },
          alignItems: "center",
        }}
      >
        You can move the table
        <ArrowForwardIcon />
      </Typography>
    </Box>
  );
};

export default UsersTable;
