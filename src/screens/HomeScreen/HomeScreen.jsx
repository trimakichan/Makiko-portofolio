import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import "./homeScreen.scss";


const HomeScreen = () => {
  return (
    <div className="home">
      <section className="home_main">
        <Main />
      </section>

      <section className="section section-height" id="about">
        <h1>About</h1>
      </section>

      <section className="section section-height" id="projects">
        <h1>Projects</h1>
      </section>

      <section className="section section-height" id="contact">
        <h1>Contact</h1>
      </section>

      <Footer />
    </div>
  )

};

export default HomeScreen;
