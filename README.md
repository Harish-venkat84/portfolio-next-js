# harish.dev

My portfolio site. Live at <https://harish-portfolio-eight-kohl.vercel.app>.

Theme: terminal meets trading desk. There's a boot sequence, a ticker tape, a ⌘K command palette (try `sudo hire harish`), a candlestick backdrop and a bento grid of the products I've built.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion 12, react-icons. All content lives in `src/lib/constants.ts`.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Animations respect `prefers-reduced-motion`.
