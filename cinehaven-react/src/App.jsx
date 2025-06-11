import "./App.css";
import Header from "./components/header";
function App() {
  return (
    <main>
      <div className="wrapper">
        <Header />
        <div className="hero">
          <span>
            <p>Estd 2025</p>
          </span>
          <h1>Cinehaven</h1>
          <h5>Wedding Photographer</h5>
          <small>
            Capturing Love, One Timeless Frame <br /> at a Time.
          </small>
        </div>
        <div className="short-description">
          <h5>Where Every Frame Tells a Love Story.</h5>
          <img src="img/heart.jpg" alt="heart image" />
          <small>
            At Cinehaven, we believe every love story deserves to be told with
            cinematic beauty and heartfelt authenticity. Through timeless
            photography and a keen eye for emotion, we capture the moments that
            make your wedding unforgettable—so you can relive them forever.
          </small>
          <a href="#">Learn More</a>
        </div>
        <div className="testimony">
          <div className="text-container">
            <h2>Marvin and Ela</h2>
            <p>
              "Working with Cinehaven was an absolute dream. They didn’t just
              take photos — they captured the soul of our wedding day. Every
              image is filled with emotion, light, and love, and we find
              something new to smile about every time we look at our gallery.
              The team made us feel comfortable and seen, and their passion
              shows in every shot. We’ll treasure these memories forever."
            </p>
          </div>
        </div>
        <div className="about-me-home">
          <div className="wrapper">
            <img src="img/placeholder.jpg" alt="" />
            <div className="text-wrapper">
              <h3>Photographer</h3>
              <hr />
              <h4>Nicolas del Rosario</h4>
              <small>
                Nicolas is a passionate wedding photographer with a talent for
                capturing authentic moments and timeless emotions. With an eye
                for natural light and a love for storytelling, he turns each
                celebration into a visual narrative that couples can cherish
                forever. His calm presence and attention to detail help couples
                feel comfortable and confident in front of the camera.
              </small>

              <button>About Me</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
