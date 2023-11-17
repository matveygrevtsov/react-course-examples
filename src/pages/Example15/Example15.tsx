import { ChangeEventHandler, useCallback, useState } from "react";
import { UsersList } from "./components/UsersList/UsersList";
import { users1, users2, users3 } from "./constants";

import s from "./styles.module.css";

export interface IUser {
  id: number;
  name: string;
  score: number;
}

export const Example15 = () => {
  const [isBlueTheme, setBlueTheme] = useState<boolean>(true);
  const [sortField, setSortField] = useState<keyof IUser>("id");

  const sortFunction = useCallback(
    (user1: IUser, user2: IUser) =>
      Number(user1[sortField]) - Number(user2[sortField]),
    [sortField]
  );

  const handleColorPick = () => setBlueTheme((isBlueTheme) => !isBlueTheme);
  const handleSortFieldSelect: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => setSortField(target.value as keyof IUser);

  return (
    <div
      className={s.root}
      style={{ backgroundColor: isBlueTheme ? "#86c9f8" : "transparent" }}
    >
      <div className={s.container}>
        <div>
          <label>Синяя тема: </label>
          <input type="radio" checked={isBlueTheme} onClick={handleColorPick} />
        </div>

        <div>
          <label>Сортировать по: </label>
          <select onChange={handleSortFieldSelect}>
            <option value="id">id</option>
            <option value="score">баллы</option>
          </select>
        </div>
      </div>
      <div className={s.container}>
        <UsersList users={users1} sortFunction={sortFunction} />
        <UsersList users={users2} sortFunction={sortFunction} />
        <UsersList users={users3} sortFunction={sortFunction} />
      </div>
    </div>
  );
};
