const photos = [
  "/images/slime-playdough.jpg",
  "/images/craft-markers.jpg",
  "/images/paint-watercolor.jpg",
  "/images/party-hula.jpg",
  "/images/cosmetics-toy.jpg",
  "/images/paint-body.jpg",
  "/images/craft-supplies.jpg",
  "/images/balloons-pinkyellow.jpg",
  "/images/paint-hands.jpg",
  "/images/confetti.jpg",
];

const PhotoMarquee = () => (
  <section className="overflow-hidden bg-white py-10 md:py-12" aria-label="Photos from our parties">
    <div className="marquee-pause relative flex select-none">
      <div className="marquee-track flex shrink-0 gap-5 pr-5">
        {photos.concat(photos).map((src, i) => (
          <div
            key={i}
            className="h-40 w-56 shrink-0 overflow-hidden rounded-3xl shadow-soft md:h-52 md:w-72"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoMarquee;
