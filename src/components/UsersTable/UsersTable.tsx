import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import UserTableElement from "../UserTableElement/UserTableElement";

const UsersTable = () => {
  const filter = useSelector(selectFilteredContacts);

  const usersList = filter.map((contact) => (
    <UserTableElement key={contact.id} userData={contact} />
  ));

  return (
    <TableContainer>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{usersList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
