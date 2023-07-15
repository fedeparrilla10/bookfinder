import image from '../../../assets/main-img.jpg';
import './Home.css';

const Home = () => {
  return (
    <>
      <main className="home">
        <div>
          <h1 className="home__title">
            <span className="home__title__b">B</span>ookFinder
          </h1>

          <p className="home__subtitle">Exploring Worlds Through Words</p>
        </div>

        <div>
          <img className="home__img" src={image} alt="BookFinder" />
        </div>
      </main>
    </>
  );
};

export default Home;
