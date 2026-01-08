type FilmProps = {
  film: {
    title: string;
    src: string;
  };
};

const Films = ({ film }: FilmProps) => {
  return (
    <div className="films">
      <iframe
        src={`${film.src}?controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&mute=1`}
        title={film.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <p>{film.title}</p>
    </div>
  );
};

export default Films;
