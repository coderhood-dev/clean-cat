import RandomCat from "./Api";
import UserName from "./UserName";
import Categories from "./Categories";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Categories />
        <RandomCat />
        <UserName />
      </header>
    </div>
  );
};
