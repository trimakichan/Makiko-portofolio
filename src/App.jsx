import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HomeScreen />
    </div>
  );
}

export default App;
