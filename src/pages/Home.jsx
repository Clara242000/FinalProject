
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="h1-title">Arabesque</h1>
      <div className="content-container">
        <div className="image-container">
          <img
            className="image-home"
            src="/src/assets/images/image14.jpg" 
            alt="Balet"
          />
        </div>
        <div className="home-info">
          <h3 className="home-title">Ballet, a hidden language of the soul</h3>
          <p>
          Arabesque is your go-to destination for ballet dancers essentials, whether you are a professional or a passionate beginner. Explore the latest releases and trends in the News section for inspiration and fresh perspectives in the ballet world.
          </p>
          <p className="additional-text">
          Discover our unique collections and enjoy comfort and style in every move. Join our community of passionate dancers and let yourself be inspired!
          </p>
          <div className="home-buttons">
            <a href="/products" className="button">Products</a>
            <a href="/whatsnew" className="button">What`s New</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

