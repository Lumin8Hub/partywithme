import SectionReveal from "./animations/SectionReveal";

const InclusivityCallout = () => (
  <section className="bg-party-paper py-12 md:py-16">
    <div className="container">
      <SectionReveal>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-party-lime/50 bg-white px-6 py-10 text-center">
          <span className="text-4xl" aria-hidden="true">🙋‍♂️</span>
          <h3 className="font-display text-2xl font-bold text-party-navy md:text-3xl text-balance">
            “Slime is just for girls?” The boys would like a word.
          </h3>
          <p className="max-w-xl text-muted-foreground">
            Every party we run is built for boys, girls and mixed groups together. Slime and Minute
            to Win It? Runaway favourites with the boys.
          </p>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default InclusivityCallout;
