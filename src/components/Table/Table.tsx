import { useEffect, useState } from "react";
import fetchUserList from "../../api/fetchUserList";
import TableElement from "../TableElement/TableElement";
import { UserAPI } from "../../types/api";

const Table = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      const users = await fetchUserList();
      setUsersList(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user: UserAPI) => (
            <TableElement key={user.id} userData={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
