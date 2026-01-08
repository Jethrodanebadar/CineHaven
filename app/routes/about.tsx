const about = () => {
  return (
    <main>
      <div className="about-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-(--text-dark)/50 to-transparent z-0"></div>
        <h1>
          About <br /> CineHaven
        </h1>
      </div>
      <div className="cinehaven-story">
        <div className="wrapper">
          <h2>How CineHaven Started</h2>
          <p>
            CineHaven was born out of a simple favor for a friend. In 2022, I
            was asked to film a small backyard wedding. I had no formal
            training—just a camera, a passion for storytelling, and a deep
            appreciation for emotion-driven moments. What started as a humble
            gesture quickly turned into something much more. The joy on the
            couple’s faces when they watched their wedding film sparked
            something in me—a realization that this was more than just a video;
            it was a time capsule of love.
          </p>
          <p>
            From that moment on, I immersed myself in the craft. I studied
            filmmaking, photography, lighting, and editing with relentless
            curiosity. One wedding turned into five, then ten, and soon
            CineHaven was born—not just as a business, but as a promise: to turn
            fleeting moments into timeless visual memories for couples who value
            authenticity, emotion, and beauty.
          </p>
        </div>
      </div>
      <div className="about-me-content">
        <div className="about-me-container">
          <h2>More Things About Me</h2>
          <div className="wrapper">
            <img src="/img/kuyanics.webp" alt="" />
            <div className="text-container">
              <h3>NICOLAS DEL ROSARIO</h3>
              <h6>FOUNDER, FILMMAKER</h6>
              <p>
                I’m a wedding photographer and filmmaker based in Cavite, and
                I’ve been telling real love stories through my lens since 2022.
                What began as a passion for visual storytelling turned into a
                heartfelt mission: to capture the raw, emotional,
                once-in-a-lifetime moments that define your wedding day.
              </p>
            </div>
          </div>
          <p>
            When I’m not behind the camera, you’ll probably find me sipping a
            strong cup of coffee, watching films that make me feel something, or
            taking long walks to recharge and reflect. I’m a bit of an old soul
            — I love handwritten notes, natural light, and the quiet moments
            most people overlook. I believe that the smallest details often tell
            the biggest stories. Whether it’s the way a groom looks at his bride
            during the vows or the tear a parent wipes away during the first
            dance — those are the moments I live to capture. Photography and
            filmmaking, for me, are more than a profession; they’re a way of
            preserving truth, love, and connection in its purest form.
          </p>
        </div>
      </div>
    </main>
  );
};

export default about;
