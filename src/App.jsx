import "./app.scss";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <div className="container">
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
