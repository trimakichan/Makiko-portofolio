import "./homeScreen.scss";


const HomeScreen = () => {
  return (
    <div className="home-container">
      <section className="section section-height" id="home">
        <h1>Home</h1>
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
    </div>
  )

};

export default HomeScreen;
