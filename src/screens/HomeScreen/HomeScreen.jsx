import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import "./homeScreen.scss";


const HomeScreen = () => {
    return (
        <div className="home">
            <div className="home__background">
                <Header />
                <Main />
                <div className="custom-shape-divider-bottom-1705415047">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>

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
