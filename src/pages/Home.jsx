// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-page">
//       <div>
//         <img
//           className="image-home"
//           src={"/src/assets/images/image13.jpeg"} /* Verifică calea imaginii */
//           alt=""
//         />
//       </div>
//       <div className="home-info">
    
//         <h3>Let`s dance like...
//           <br />
//         ...Nobody is watching !</h3>
//         <br />
//         <p>
//           Arabesque este destinația ta principală pentru toate produsele necesare dansatorilor de balet. Fie că ești un dansator profesionist sau un începător pasionat, vei găsi tot ce ai nevoie pentru a străluci pe scenă. Rămâi la curent cu ultimele tendințe și produse din lumea baletului vizitând secțiunea noastră de What`s New. Aici vei găsi cele mai recente lansări de produse, recomandări personalizate și noutăți din domeniu. Ne dorim să fii mereu informat și inspirat, astfel încât să îți poți exprima creativitatea la maximum.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;











// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-page">
//       <div className="image-container">
//         <img
//           className="image-home"
//           src="/src/assets/images/image14.jpg" // Verifică calea imaginii corectă
//           alt="Ballet"
//         />
//       </div>
//       <div className="home-info">
//         <h3 className="home-title">Ballet, a hidden language of the soul</h3>
//         <p>
//           Arabesque is your go-to destination for ballet dancers essentials, whether you`re a professional or a passionate beginner. Explore the latest releases and trends in our What`s New section for inspiration and fresh insights into the ballet world.
//         </p>
//         <div className="home-buttons">
//           <a href="/products" className="button">View Products</a>
//           <a href="/whatsnew" className="button">What`s New</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="content-container">
        <div className="image-container">
          <img
            className="image-home"
            src="/src/assets/images/image14.jpg" // Verifică calea imaginii corectă
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
            <a href="/products" className="button">Our Products</a>
            <a href="/whatsnew" className="button">What`s</a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

