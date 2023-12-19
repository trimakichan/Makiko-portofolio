import "./app.scss";
import Header from "./components/Header/Header";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <HomeScreen /> */}
      <ProfileImage />
    </div>
  );
}

export default App;
