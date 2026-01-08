import { videoData } from "~/components/data";
import Films from "~/components/films";

const experience = () => {
  return (
    <main>
      <div className="exp-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-(--text-dark)/90 to-transparent z-0"></div>
        <h1>
          Experience <span> with</span> <br /> CineHaven
        </h1>
      </div>
      <div className="wrapper">
        <div className="featured-films">
          <h2>Featured Films</h2>
          <ul>
            {videoData.map((film) => (
              <Films film={film} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default experience;
