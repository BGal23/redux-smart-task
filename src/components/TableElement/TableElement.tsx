import { UserAPI } from "../../types/api";

interface Props {
  userData: UserAPI;
}

const TableElement: React.FC<Props> = ({
  userData: { name, username, email, phone },
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableElement;
