import { useDispatch } from "react-redux";
import { setFiltersStatus } from "../../redux/filtersSlice";
import { Box, TextField } from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();

  const filtered = (newFiltersStatus: React.ChangeEvent<HTMLInputElement>) => {
    const filtersValue = newFiltersStatus.target.value;
    dispatch(setFiltersStatus(filtersValue));
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="search"
          label="Search"
          variant="standard"
          onChange={filtered}
        />
      </Box>
    </>
  );
};

export default Filters;
