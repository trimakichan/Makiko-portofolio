import "./main.scss";
import ProfileImage from '../ProfileImage/ProfileImage'

const Main = () => {
    return (

        <div className="main">
            <div className="main__contentWrapper">
                <section className="main__content">
                    <h2>Makiko Yokoyama</h2>
                    <p>
                        I am a web developer
                    </p>
                </section>
                <section className="main__image">
                    <ProfileImage />
                </section>

            </div>
        </div>



    );
};

export default Main;
