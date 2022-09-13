import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [sortedValue, setSortedValue] = useState("default");
  const [sortedUsers, setSortedUsers] = useState(users);

  function fetchUsers() {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
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

  return { isLoading, filter, setFilter, users, setSortedValue, filteredUsers };
};
