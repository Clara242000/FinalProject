import './Home.css';
import image1 from '../assets/images/image1.jpeg';


const Home = () => {
  return (
    <div className="page home">
      <br />
      <h2>Bun venit la Ballet Shop!</h2>
      <br /><br /> <br />
     <img className='imagehome' src={image1} alt="image1" />
      <p>
        <strong>Ballet Shop</strong> este destinația ta principală pentru toate produsele necesare dansatorilor de balet. Fie că ești un dansator profesionist sau un începător pasionat, vei găsi tot ce ai nevoie pentru a străluci pe scenă. De la îmbrăcăminte și încălțăminte de balet de cea mai înaltă calitate, până la accesorii esențiale și echipamente de antrenament, Ballet Shop oferă o gamă variată de produse care să îți susțină pasiunea pentru dans.
      </p>
      <h3>Produse de Înaltă Calitate</h3>
      <p>
        La Ballet Shop, ne mândrim cu selecția noastră de produse de înaltă calitate. Colaborăm cu branduri renumite și producători de top pentru a ne asigura că fiecare produs pe care îl oferim este durabil, confortabil și stilat. De la poante și balerini, până la tricouri și tutu-uri, toate produsele noastre sunt alese cu grijă pentru a răspunde celor mai exigente standarde ale dansatorilor de balet.
      </p>
      <h3>Noutăți și Recomandări</h3>
      <p>
        Rămâi la curent cu ultimele tendințe și produse din lumea baletului vizitând secțiunea noastră de <strong>What`s New</strong>. Aici vei găsi cele mai recente lansări de produse, recomandări personalizate și noutăți din domeniu. Ne dorim să fii mereu informat și inspirat, astfel încât să îți poți exprima creativitatea la maximum.
      </p>
      <h3>Comunitatea Ballet Shop</h3>
      <p>
        Ballet Shop nu este doar un magazin; este o comunitate. În secțiunea <strong>Contact</strong>, poți afla mai multe despre noi și cum să ne contactezi pentru orice întrebări sau sugestii. Suntem aici pentru a te ajuta și pentru a te susține în călătoria ta de dansator.
      </p>
    </div>
  );
};

export default Home;
