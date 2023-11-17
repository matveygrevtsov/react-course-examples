import { FC, useMemo } from "react";
import { IUser } from "../../Example15";

interface IProps {
  users: IUser[];
  sortFunction: (user1: IUser, user2: IUser) => number;
}

export const UsersList: FC<IProps> = ({ users, sortFunction }) => {
  const sortedUsers = useMemo(
    () => [...users].sort(sortFunction),
    [users, sortFunction]
  );

  return (
    <table>
      <tr>
        <th>id</th>
        <th>имя</th>
        <th>баллы</th>
      </tr>
      {sortedUsers.map(({ id, name, score }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{score}</td>
        </tr>
      ))}
    </table>
  );
};
