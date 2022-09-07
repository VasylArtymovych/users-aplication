import { useState, useEffect } from "react";
import Header from "components/Header";
import Main from "components/Main";

function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        setUsers(users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header onChange={inputHandler} value={search} />
      <Main filteredUsers={filteredUsers} />
    </>
  );
}

export default App;
