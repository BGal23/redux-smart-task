import { UserAPI } from "../../types/api";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface Props {
  userData: UserAPI;
}

const UserTableElement: React.FC<Props> = ({
  userData: { id, name, username, email, phone },
}) => {
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{username}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{phone}</TableCell>
    </TableRow>
  );
};

export default UserTableElement;
