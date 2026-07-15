/**
 * ============================================================
 *  EAST SIDE BAPTIST CHURCH — SITE CONTENT
 * ============================================================
 * This is the ONLY file you should need to edit day-to-day.
 * Change any text, time, or sermon below and save — the page
 * reads from this file automatically. No HTML knowledge needed.
 *
 * ADDING A NEW SERMON
 * --------------------
 * Copy one of the blocks inside `sermons: [ ... ]` (from the
 * opening { to the closing },) and paste it right after the
 * opening "sermons: [" line, then edit the fields.
 * Newest sermon should always go at the TOP of the list.
 *
 * EMBEDDING VIDEO — 4 supported ways:
 *
 * 1) YouTube:
 *      video: { type: "youtube", src: "dQw4w9WgXcQ" }
 *    (the part after "watch?v=" in a YouTube URL, or the full
 *    YouTube link — both work)
 *
 * 2) Vimeo:
 *      video: { type: "vimeo", src: "76979871" }
 *    (the number in the Vimeo URL, or the full link)
 *
 * 3) Cloudflare Stream, Rumble, Facebook Video, or any service
 *    that gives you an "embed" link/iframe:
 *      video: { type: "embed", src: "https://.../iframe" }
 *
 * 4) A direct video file on any CDN (Cloudflare R2, Bunny,
 *    Backblaze, S3, etc.) — anything ending in .mp4:
 *      video: { type: "mp4", src: "https://cdn.example.com/sermon.mp4" }
 *
 * Leave out the whole `video` field for a sermon with no
 * recording yet (audio coming later, etc.) — the card will
 * just show the title, date, and description.
 * ============================================================
 */

window.SITE_CONTENT = {

  site: {
    title: "East Side Baptist Church — Springhill, LA",
    description: "East Side Baptist Church in Springhill, Louisiana. Join us for Sunday School, worship, and Bible study — everyone is welcome.",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Sermons", href: "#sermons" },
    { label: "Pastor", href: "#pastor" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "East Side Baptist Church · Springhill, Louisiana",
    name: "Come as you are.",
    image: "../assets/img/church-300x169-1.png",
    imageAlt: "East Side Baptist Church in Springhill Louisiana",
    tagline: "A small congregation on the east side of Springhill, holding to the old paths — Sunday School, worship, and prayer meeting, every week, for everyone who walks through the door.",
    primaryCta: { label: "Watch the latest sermon", href: "#sermons" },
    secondaryCta: { label: "Get directions", href: "#contact" },
  },

  announcement: "Messages are posted here and on Facebook every week. Come sit with us — no dress code, no strangers, just family.",

  serviceTimes: [
    { label: "Sunday School", time: "9:45 AM" },
    { label: "Sunday Morning Worship", time: "10:45 AM" },
    { label: "Sunday Evening Bible Study", time: "5:00 PM" },
    { label: "Sunday Evening Worship", time: "6:00 PM" },
    { label: "Wednesday Bible Study", time: "6:00 PM" },
  ],

  sermons: [
	{
      title: "God’s Driving School",
      date: "April 11, 2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "535623052" },
    },
	{
      title: "Easter Morning",
      date: "2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "533289991" },
    },
    {
      title: "What a Day",
      date: "March 25, 2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "533291798" },
    },
    {
      title: "Getting Your Hopes Up",
      date: "March 21, 2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "533292734" },
    },

	{
      title: "Paul’s Ministry in Rome",
      date: "March 14, 2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "533294224" },
    },

    {
      title: "How to Pray for a Nation",
      date: "March 7, 2021",
      speaker: "Bro. Walter A. Holmes",
      description: "",
      video: { type: "vimeo", src: "533295997" },
    },

  ],

  pastor: {
    name: "Bro. Walter A. Holmes",
    photo: "assets/img/pastor.jpg",
    photoAlt: "Bro. Walter A. Holmes, pastor of East Side Baptist Church",
    intro: "Pastor of East Side Missionary Baptist Church since September 2016.",
    bio: [
      "Studied at Weatherford Junior College, UT Arlington, and TCU. Served four years in the United States Navy before entering the ministry.",
      "Married to his high school sweetheart since May 1969. Together they have three children, eight grandchildren, and four great-grandchildren.",
    ],
    timeline: [
      { year: "Feb 2006", event: "Licensed to preach the gospel by Heritage Baptist, Lucedale, MS" },
      { year: "Feb 2008", event: "Ordained by Immanuel Baptist, Plain Dealing, Louisiana" },
      { year: "2008 – 2012", event: "Pastor of Immanuel Baptist, Plain Dealing" },
      { year: "2015", event: "Interim Pastor, East Side Missionary Baptist, Springhill" },
      { year: "2016 – present", event: "Pastor, East Side Missionary Baptist, Springhill" },
    ],
  },

  contact: {
    heading: "Visit us",
    address: "813 Reynolds St, Springhill, LA 71075",
    mailingAddress: "P.O. Box 637, Springhill, LA 71075",
    email: "info@eastsidebaptist-springhill.org",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6692.289351684008!2d-93.450291!3d32.999961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86315fa52efc965f%3A0x3f571b0734ab5b72!2s813%20Reynolds%20St%2C%20Springhill%2C%20LA%2071075!5e0!3m2!1sen!2sus!4v1597626196128!5m2!1sen!2sus",
    note: "We don't run an online contact form — Facebook Messenger or email is the fastest way to reach us.",
  },

  footer: {
    text: "© " + new Date().getFullYear() + " East Side Baptist Church, Springhill, LA.",
  },

};
