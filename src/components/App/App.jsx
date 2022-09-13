import Header from "components/Header";
import Main from "components/Main";
import { useFetchUsers } from "hooks";

function App() {
  const { isLoading, filter, setFilter, filteredUsers, setSortedValue } =
    useFetchUsers();

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
      <Main filteredUsers={filteredUsers} isLoading={isLoading} />
    </>
  );
}

export default App;
