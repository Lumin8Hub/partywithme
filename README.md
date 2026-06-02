# Party With Me

Marketing website for **Party With Me** — fully-led, mess-free kids' birthday parties brought to your space across the **Greater Toronto Area** and **Greater Boston**. Slime, unicorns, science, games and more for ages 5–12.

🎉 **Live site:** https://lumin8hub.github.io/partywithme/ (custom domain `partywithme.fun` pending DNS)

## What's inside (Phase 1)

A complete marketing site plus an inquiry form (no live booking calendar or payment yet):

- **Home** — hero, photo marquee, promise tiles, party carousel, how-it-works, social proof, regions, CTA
- **Parties** — filterable grid of all 12 themes + coming-soon teasers
- **Party detail** — template page per party (what happens, what's included, add-ons, gallery)
- **How It Works**, **Where We Are**, **Gallery** (lightbox), **Reviews**, **About**, **FAQ**, **Contact**, **Privacy**
- **Book My Party** — the conversion hub: validated inquiry form with a confetti success state

Region-aware content (Toronto / Boston toggle), scroll & hover animations (with `prefers-reduced-motion` support), lazy-loaded imagery, and a mobile floating "Book My Party" button.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Embla Carousel](https://www.embla-carousel.com/) for carousels
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for the inquiry form
- [React Router](https://reactrouter.com/) for navigation

## Local development

```sh
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:8080)
npm run build    # production build to dist/
npm run lint     # lint
npm run preview  # preview the production build
```

## Inquiry form delivery

The booking form works with no backend out of the box: if no form endpoint is configured it opens the visitor's email client pre-filled to `info@partywithme.fun`.

To capture submissions automatically (e.g. via [Formspree](https://formspree.io/) or any service that accepts a JSON `POST`), set an environment variable at build time:

```sh
VITE_FORM_ENDPOINT="https://formspree.io/f/your-id"
```

When set, the form quietly `POST`s the submission JSON to that endpoint and still shows the confetti success message.

## Deployment

Pushing to `main` builds the site and deploys it to **GitHub Pages** via the workflow in `.github/workflows/deploy.yml`.

The site currently publishes to the project path **https://lumin8hub.github.io/partywithme/**. The build base path is set with `BASE_PATH: "/partywithme/"` in the deploy workflow; Vite uses it for asset URLs and React Router derives its `basename` from it (`import.meta.env.BASE_URL`). A `postbuild` step copies `index.html` to `404.html` so client-side routes resolve on deep links and refreshes.

### Switching to the custom domain (`partywithme.fun`)

When the domain's DNS is pointed at GitHub Pages:

1. Remove the `BASE_PATH` env var from the `Build` step in `.github/workflows/deploy.yml` (so the build targets the domain root, `base: "/"`).
2. Re-add `public/CNAME` containing `partywithme.fun`.
3. Set the custom domain under **Settings → Pages** and let GitHub verify it.
