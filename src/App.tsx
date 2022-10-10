import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, amountAdd } from "./features/counter/counter-slice.";
import { useFetchUsersQuery } from "./features/dogs/users-api-slice";

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numUser, setNumUser] = React.useState(5);

  const { data = [], isFetching } = useFetchUsersQuery(numUser);

  const handleClick = () => {
    dispatch(amountAdd(numUser));
  };

  return (
    <div>
      <label htmlFor="users">Choose amount users to fetch: </label>
      <select
        name="users"
        id="users"
        value={numUser}
        onChange={(e) => setNumUser(Number(e.target.value))}
      >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="9">9</option>
      </select>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increase by 1</button>
      <button onClick={handleClick}>increase by amount of users </button>
      <div>
        <div>
          <p>
            fetch amount of users is
            <span
              style={{
                marginLeft: "0.5rem",
                color: "tomato",
                fontWeight: "bold",
              }}
            >
              {data.length}
            </span>
          </p>
        </div>
        <div style={{ color: "teal" }}>
          {data.map((item) => {
            return (
              <ul className="ul">
                <li key={item.id}>{`${item.id} ${item.name}`}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
