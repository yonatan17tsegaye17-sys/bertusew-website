# Bertusew Running & Bike Club
Next.js + TypeScript + Tailwind. Content-driven, no database.
## Run
`npm install && npm run dev` · check: `npm run lint && npm run build`
## Edit content (all in /content)
site.ts (links, nav, hero) · stats.ts (null = hidden) · story.ts · activities.ts · events.ts · recognition.ts (documents, recommendations, relationships) · pages.ts
Links: copy `.env.example` to `.env.local` and fill in URLs. Empty links are hidden.
## Add files
Photos/videos: put in `public/media`, reference as `/media/name.jpg`. Letters (PDF/JPG/PNG/WEBP): put in `public/documents`, add an entry to `documents` in `content/recognition.ts`.
## Deploy
`git init && git add . && git commit -m "Bertusew v1" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`, then Vercel → Add New Project → import repo → Deploy. Set the same env vars in Vercel if you want links live.
## Roadmap
Events + registrations → members → routes/GPS → challenges → bike ecosystem → Addis Active.
