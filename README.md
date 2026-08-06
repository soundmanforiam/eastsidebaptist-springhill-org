# East Side Baptist Church — website

A plain HTML/CSS/JS site. No build step, no server, no WordPress —
just static files, ready for Cloudflare Pages.

## Files

- `index.html` — page structure (you shouldn't need to touch this)
- `styles.css` — all visual design
- `content.js` — **edit this one.** Every word of text and every
  service time on the site lives here.
- `app.js` — reads `content.js` and builds the page (you shouldn't
  need to touch this either)
- `assets/img/` — photos. `pastor.jpg` in there right now is just a
  placeholder — drop in the real photo with the same filename, or
  change the path in `content.js`.

## Editing text or service times

Open `content.js` in any text editor (even Notepad or TextEdit works).
Everything is labeled in plain English. Change a time, save the file,
re-upload — done.

## Sermons

There's no separate sermons section to maintain. The "Latest from
Facebook" section on the site embeds the church's Facebook page
directly and updates itself automatically whenever a new sermon (or
any other post) goes up — nothing to edit here for a new sermon.

If the church's Facebook page URL ever changes, update `pageUrl` in
the `facebook: { ... }` block in `content.js`.

## Deploying to Cloudflare Pages

1. Push these files to a GitHub repository (same way you did for the
   photography site).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, select the repo.
3. Build settings: leave the build command **blank** and set the
   output directory to `/` (this is a static site — there's nothing
   to build).
4. Deploy. Every future push to the repo's main branch will
   auto-update the live site.
5. Once it's live and you've checked it over, point your domain's DNS
   at Cloudflare Pages and you can cancel the old host.

## Things worth doing before you go live

- Replace `assets/img/pastor.jpg` with the real photo.
- Double check the `email` field in `content.js` — it's currently a
  placeholder (`info@eastsidebaptist-springhill.org`); set it to
  whatever inbox you actually want messages to land in.
- There's no working contact form on this site (a real submit-to-email
  form needs a backend, which a static site doesn't have on its own).
  Right now the Contact section points people to Facebook Messenger
  and a `mailto:` link instead. If you want an actual form later, a
  service like Formspree or a small Cloudflare Worker can add one
  without needing to bring back full WordPress hosting.
