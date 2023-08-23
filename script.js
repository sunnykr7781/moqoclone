var t = gsap.timeline();
t.to("#page1 h1", {
  fontWeight: 50,
  transform: "translateX(-170%)",

  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0%",
    end: "top -260%",
    scrub: 3.4,

    // markers: "true",
    pin: true,
  },
});
t.to("h2,h3", {
  y: -100,
  scale: 2,
  fontWeight: 500,
  opacity: 0,

  stagger: 0.15,
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "body",
    start: "top 3%",
    end: "top -275%",
    scrub: 5,

    // markers: "true",
  },
});
t.from("#page1 img", {
  y: 520,
  scale: 0.4,
  opacity: 0.6,

  scrollTrigger: {
    trigger: "#page1",
    scroller: "body ",
    start: "top 0.1%",
    end: "top -170%",
    // markers: "true",
    scrub: 5,
    // pin: true,
  },
});
t.to("img", {
  scale: 1.05,

  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top -2%",
    end: "top -190%",

    // markers: "true",
    scrub: 5,
    pin: true,
  },
});
t.from("#left h1, #left h5", {
  y: 400,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#left h1",
    scroller: "body",
    start: "top 107%",
    end: "top 102%",
    scrub: 3,
    // markers: true,
  },
});
t.from("#right h1", {
  y: 450,
  stagger: 0.01,
  scale: 1.5,

  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top -10%",
    end: "top -82%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});

t.from("#page3 #img1, #page3 #img2 ", {
  height: 30,
  y: 315,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 45%",
    end: "top -7%",
    scrub: 5,
    pin: true,
    markers: true,
  },
});
