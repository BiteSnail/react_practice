import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say"
const App = () => {
  return (
  <div>
    <MyComponent name="react" favoriteNumber={3}><h1>리액트</h1></MyComponent>
    <Counter></Counter>
    <Say></Say>
  </div>
  );

};

export default App;