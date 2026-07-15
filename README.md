# East Side Baptist Church — website

A plain HTML/CSS/JS site. No build step, no server, no WordPress —
just static files, ready for Cloudflare Pages.

## Files

- `index.html` — page structure (you shouldn't need to touch this)
- `styles.css` — all visual design
- `content.js` — **edit this one.** Every word of text, every service
  time, and every sermon on the site lives here.
- `app.js` — reads `content.js` and builds the page (you shouldn't
  need to touch this either)
- `assets/img/` — photos. `pastor.jpg` in there right now is just a
  placeholder — drop in the real photo with the same filename, or
  change the path in `content.js`.

## Editing text or service times

Open `content.js` in any text editor (even Notepad or TextEdit works).
Everything is labeled in plain English. Change a time, save the file,
re-upload — done.

## Adding a new sermon

In `content.js`, find the `sermons: [ ... ]` list near the top and
copy one whole block (from `{` to the matching `},`), paste it at the
top of the list (newest first), then edit the fields.

### Embedding sermon video (from any CDN)

Four supported formats — pick whichever matches where your video lives:

| Where the video is | What to put in `content.js` |
|---|---|
| YouTube | `video: { type: "youtube", src: "VIDEO_ID_OR_FULL_URL" }` |
| Vimeo | `video: { type: "vimeo", src: "VIDEO_ID_OR_FULL_URL" }` |
| Cloudflare Stream, Facebook Video, Rumble, or anything else that gives you an embed link | `video: { type: "embed", src: "https://.../iframe" }` |
| A direct `.mp4` file on any CDN (Cloudflare R2, Bunny, S3, Backblaze, etc.) | `video: { type: "mp4", src: "https://cdn.example.com/file.mp4" }` |

No recording yet? Just leave the whole `video:` line out (or commented
with `//` in front) — the card will still show the title and
description without a broken player.

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
