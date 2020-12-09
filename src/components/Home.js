import RandomCat from "./Api";
import UserName from "./UserName";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UserName />
        <RandomCat />
      </header>
    </div>
  );
};
