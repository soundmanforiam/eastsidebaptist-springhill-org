/**
 * Renders the page from window.SITE_CONTENT (see content.js).
 * You shouldn't need to edit this file — change content.js instead.
 */
(function () {
  const C = window.SITE_CONTENT;
  if (!C) {
    console.error("content.js did not load — check the <script> tag order in index.html");
    return;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  };

  document.title = C.site.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", C.site.description);

  // ---- NAV ----
  const navLinks = $("#nav-links");
  C.nav.forEach((item) => navLinks.appendChild(el("a", { href: item.href }, item.label)));

  const navToggle = $("#nav-toggle");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // ---- HERO ----
  $("#hero-eyebrow").textContent = C.hero.eyebrow;
  $("#hero-name").textContent = C.hero.name;
  $("#hero-tagline").textContent = C.hero.tagline;
  const primaryCta = $("#hero-cta-primary");
  primaryCta.href = C.hero.primaryCta.href;
  primaryCta.querySelector("span").textContent = C.hero.primaryCta.label;
  const secondaryCta = $("#hero-cta-secondary");
  secondaryCta.href = C.hero.secondaryCta.href;
  secondaryCta.querySelector("span").textContent = C.hero.secondaryCta.label;

  // ---- SERVICE TIMES BOARD ----
  const boardList = $("#board-list");
  C.serviceTimes.forEach((item) => {
    boardList.appendChild(
      el("li", { class: "board__row" }, [
        el("span", { class: "board__day" }, item.label),
        el("span", { class: "board__time" }, item.time),
      ])
    );
  });

  // ---- ANNOUNCEMENT ----
  $("#announcement-text").textContent = C.announcement;

  // ---- SERMONS ----
  function buildVideo(video) {
    if (!video || !video.src) return null;

    const wrap = el("div", { class: "sermon__video" });

    if (video.type === "youtube") {
      const id = extractId(video.src, /(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
      wrap.appendChild(
        el("iframe", {
          src: `https://www.youtube-nocookie.com/embed/${id}`,
          title: "Sermon video",
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: "true",
        })
      );
    } else if (video.type === "vimeo") {
      const id = extractId(video.src, /vimeo\.com\/(?:video\/)?(\d+)/);
      wrap.appendChild(
        el("iframe", {
          src: `https://player.vimeo.com/video/${id}`,
          title: "Sermon video",
          loading: "lazy",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowfullscreen: "true",
        })
      );
    } else if (video.type === "embed") {
      wrap.appendChild(
        el("iframe", {
          src: video.src,
          title: "Sermon video",
          loading: "lazy",
          allow: "autoplay; fullscreen; picture-in-picture; encrypted-media",
          allowfullscreen: "true",
        })
      );
    } else if (video.type === "mp4") {
      wrap.appendChild(
        el("video", { controls: "true", preload: "metadata", src: video.src })
      );
    } else {
      return null;
    }

    return wrap;
  }

  function extractId(value, pattern) {
    const match = String(value).match(pattern);
    return match ? match[1] : value;
  }

  const grid = $("#sermons-grid");
  C.sermons.forEach((sermon, i) => {
    const videoEl = buildVideo(sermon.video);
    const card = el("article", { class: `sermon reveal${i === 0 ? " sermon--featured" : ""}` }, [
      videoEl || el("div", { class: "sermon__video sermon__video--none" }, "Recording coming soon"),
      el("div", { class: "sermon__body" }, [
        el("p", { class: "sermon__date" }, sermon.date),
        el("h3", { class: "sermon__title" }, sermon.title),
        sermon.speaker ? el("p", { class: "sermon__speaker" }, sermon.speaker) : null,
        sermon.description ? el("p", { class: "sermon__desc" }, sermon.description) : null,
      ]),
    ]);
    grid.appendChild(card);
  });

  // ---- FACEBOOK ----
  if (C.facebook && C.facebook.pageUrl) {
    $("#facebook-heading").textContent = C.facebook.heading || "Latest from Facebook";
    const fbContainer = $("#facebook-embed");
    fbContainer.appendChild(
      el("div", {
        class: "fb-page",
        "data-href": C.facebook.pageUrl,
        "data-tabs": "timeline",
        "data-width": "500",
        "data-height": "700",
        "data-small-header": "false",
        "data-adapt-container-width": "true",
        "data-hide-cover": "false",
        "data-show-facepile": "true",
      })
    );
    // If the FB SDK already finished loading before this ran, ask it to
    // render the plugin we just added (normally it parses on its own).
    if (window.FB && window.FB.XFBML) window.FB.XFBML.parse(fbContainer);
  }

  // ---- PASTOR ----
  const pastorPhoto = $("#pastor-photo");
  pastorPhoto.src = C.pastor.photo;
  pastorPhoto.alt = C.pastor.photoAlt || "";
  $("#pastor-name").textContent = C.pastor.name;
  $("#pastor-intro").textContent = C.pastor.intro;
  const pastorBio = $("#pastor-bio");
  C.pastor.bio.forEach((para) => pastorBio.appendChild(el("p", {}, para)));
  const timeline = $("#pastor-timeline");
  C.pastor.timeline.forEach((t) =>
    timeline.appendChild(
      el("li", {}, [el("span", { class: "timeline__year" }, t.year), el("span", { class: "timeline__event" }, t.event)])
    )
  );

  // ---- CONTACT ----
  $("#contact-heading").textContent = C.contact.heading;
  $("#contact-address").textContent = C.contact.address;
  $("#contact-mail-address").textContent = C.contact.mailingAddress;
  const emailLink = $("#contact-email");
  emailLink.textContent = C.contact.email;
  emailLink.href = `mailto:${C.contact.email}`;
  const fbLink = $("#contact-facebook");
  fbLink.href = C.contact.facebook;
  fbLink.textContent = C.contact.facebookLabel;
  $("#contact-note").textContent = C.contact.note;
  $("#contact-map").src = C.contact.mapEmbedSrc;

  // ---- FOOTER ----
  $("#footer-text").textContent = C.footer.text;

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((elm) => io.observe(elm));
  } else {
    revealEls.forEach((elm) => elm.classList.add("is-visible"));
  }

  // ---- STICKY NAV SHADOW ----
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
