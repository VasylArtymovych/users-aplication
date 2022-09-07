import { useState, useEffect } from "react";
import Header from "components/Header";
import Main from "components/Main";

function App() {
  const [filter, setFilter] = useState("");
  const [sortedValue, setSortedValue] = useState("default");
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState(users);

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

  useEffect(() => {
    switch (sortedValue) {
      case "ascending":
        const sortedUsersByAscending = [...users].sort((user1, user2) =>
          user1.name.localeCompare(user2.name)
        );
        setSortedUsers(sortedUsersByAscending);
        return;

      case "descending":
        const sortedUsersByDescending = [...users].sort((user1, user2) =>
          user2.name.localeCompare(user1.name)
        );
        setSortedUsers(sortedUsersByDescending);
        return;

      default:
        setSortedUsers(users);
    }
  }, [setSortedValue, sortedValue, users]);

  const filteredUsers = sortedUsers.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortSelect = (e) => {
    setSortedValue(e.target.value);
  };

  return (
    <>
      <Header
        onSearchChange={handleSearchChange}
        onSelectChange={handleSortSelect}
        value={filter}
      />
      <Main filteredUsers={filteredUsers} />
    </>
  );
}

export default App;
