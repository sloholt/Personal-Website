# My Figma Site (Next.js + Tailwind)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Render
1. Push to GitHub.
2. Render → New Web Service → connect repo
3. Build: `npm ci && npm run build`
4. Start: `npm start`

## Customize
- Colors/tokens: `app/globals.css`
- Sections/components: `app/page.tsx`, `components/`
- Assets: `public/`
