import { asset } from "@/lib/asset";

const photos = [
  asset("/images/slime-playdough.jpg"),
  asset("/images/craft-markers.jpg"),
  asset("/images/paint-watercolor.jpg"),
  asset("/images/party-hula.jpg"),
  asset("/images/cosmetics-toy.jpg"),
  asset("/images/paint-body.jpg"),
  asset("/images/craft-supplies.jpg"),
  asset("/images/balloons-pinkyellow.jpg"),
  asset("/images/paint-hands.jpg"),
  asset("/images/confetti.jpg"),
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
