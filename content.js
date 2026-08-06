/**
 * ============================================================
 *  EAST SIDE BAPTIST CHURCH — SITE CONTENT
 * ============================================================
 * This is the ONLY file you should need to edit day-to-day.
 * Change any text or time below and save — the page reads from
 * this file automatically. No HTML knowledge needed.
 *
 * SERMONS
 * --------------------
 * Sermons are no longer listed here individually — the site
 * shows a live "Latest from Facebook" feed instead (see the
 * `facebook` block below), which updates on its own whenever a
 * new sermon or post goes up on the church's Facebook page.
 * ============================================================
 */

window.SITE_CONTENT = {

  site: {
    title: "East Side Baptist Church — Springhill, LA",
    description: "East Side Baptist Church in Springhill, Louisiana. Join us for Sunday School, worship, and Bible study — everyone is welcome.",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Facebook", href: "#facebook" },
    { label: "Pastor", href: "#pastor" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "East Side Baptist Church · Springhill, Louisiana",
    name: "Come as you are.",
    image: "assets/img/street-view.jpg",
    imageAlt: "East Side Missionary Baptist Church building and sign, Springhill, Louisiana",
    tagline: "A small congregation on the east side of Springhill, holding to the old paths — Sunday School, worship, and prayer meeting, every week, for everyone who walks through the door.",
    primaryCta: { label: "Watch the latest sermon", href: "#facebook" },
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

  // Live feed of the church's Facebook page — updates automatically
  // whenever they post, no site edits needed. Change pageUrl if the
  // page's web address ever changes.
  facebook: {
    heading: "Latest from Facebook",
    pageUrl: "https://www.facebook.com/profile.php?id=61592050793517",
  },

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
    facebook: "https://www.facebook.com/profile.php?id=61592050793517",
    facebookLabel: "Message us on Facebook",
    note: "We don't run an online contact form — Facebook Messenger or email is the fastest way to reach us.",
  },

  footer: {
    text: "© " + new Date().getFullYear() + " East Side Baptist Church, Springhill, LA.",
  },

};
