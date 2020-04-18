document.addEventListener("DOMContentLoaded", (e) => {
  //   console.log("hi");
  //// Creadting a gsap TIMElINE
  //   const tl1 = new gsap.timeline({ defaults: { duration: 1 } }); //every tween will have default 1sec animation duration
  //   //Setting tween
  //   tl1
  //     .fromTo(".menu__logo--text", { opacity: 0, y: -70 }, { opacity: 1, y: 0 })
  //     .fromTo(
  //       ".primary-heading",
  //       { opacity: 0, x: -50 },
  //       { opacity: 1, x: 0 },
  //       "-=0.5"
  //     )
  //     .fromTo(
  //       ".secondary-heading",
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0 },
  //       "-=0.5"
  //     )
  //     .fromTo("#about-text", { x: 70, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.5")
  //     .fromTo(
  //       ".hero__img",
  //       { x: 20, opacity: 0, scale: 0.55 },
  //       { x: 0, opacity: 1, scale: 1 },
  //       "-=0.7"
  //     )
  //     .fromTo(
  //       ".hero__buttons",
  //       { x: -50, opacity: 0 },
  //       { x: 0, opacity: 1 },
  //       "+=0.2"
  //     )
  //     .fromTo(
  //       ".hero__quote",
  //       { x: 70, opacity: 0 },
  //       { x: 0, opacity: 1 },
  //       "-=1.1"
  //     )
  //     .fromTo(
  //       ".social",
  //       { x: 20, y: -70, opacity: 0 },
  //       { x: 0, y: 0, opacity: 1 },
  //       "-=1"
  //     );

  /**
   *
   */
  const tl1 = new TimelineMax(); //every tween will have default 1sec animation duration
  //Setting tween
  tl1
    .from(".menu__logo--text", 1, { opacity: 0, y: -70 })
    .from(".primary-heading", 1, { opacity: 0, x: -50 })
    .from(".secondary-heading", 1, { opacity: 0, y: 50 }, "-=0.5")
    .from("#about-text", 1, { x: 70, opacity: 0 }, "-=0.5")
    .from(".hero__img", 1, { x: 20, opacity: 0, scale: 0.55 }, "-=0.7")
    .from(".hero__buttons", 1, { x: -50, opacity: 0 }, "+=0.2")
    .from(".hero__quote", 1, { x: 70, opacity: 0 }, "-=1.1")
    .from(".social", 1, { x: 20, y: -70, opacity: 0 }, "-=1");
  // * SCROLLMAGIC
  const timelineScene1 = new TimelineMax();
  const tween1 = TweenMax.fromTo(
    ".skills",
    1,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1 }
  );
  timelineScene1.add(tween1);
  // basic initialization
  const controller = new ScrollMagic.Controller();
  //Creating a Scene
  const scene1 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: ".skills",
    triggerHook: 0.8,
  })
    .setTween(tween1)
    .addIndicators({ name: "SCENE", colorEnd: "#FFFFFF" })
    .addTo(controller);

  /**
   *
   */
  // * project section animation
  const timeline2 = new TimelineMax();
  const tween2 = TweenMax.from(".projects-section", 1, { opacity: 0, y: 70 });
  const tween3 = TweenMax.from("#natour-img", 1, {
    opacity: 0,
    x: -70,
    ease: Power1.easeOut,
  });
  const tween4 = TweenMax.from("#natour-info", 1, {
    opacity: 0,
    x: 70,
    ease: Power1.easeOut,
  });
  const tween5 = TweenMax.from("#forkify-img", 1, {
    opacity: 0,
    x: 70,
    ease: Power1.easeOut,
  });
  const tween6 = TweenMax.from(
    "#forkify-info",
    1,
    {
      opacity: 0,
      y: 70,
      ease: Back.easeOut,
    },
    "-=0.5"
  );
  timeline2.add(tween2).add(tween3).add(tween4).add(tween5).add(tween6);
  const scene2 = new ScrollMagic.Scene({
    duration: 1200,
    triggerElement: ".projects-section",
    triggerHook: 0.9,
  })
    .setTween(timeline2)
    .addIndicators({ name: "SCENE", colorEnd: "#FFFFFF" })
    .addTo(controller);

  // * portfolio section animation
  const timeline3 = new TimelineMax();
  const tween7 = TweenMax.from(".portfolio-section", 1, { opacity: 0, y: 70 });
  const tween8 = TweenMax.from("#gallery1", 1, {
    opacity: 0,
    x: -70,
    ease: Power1.easeOut,
  });
  const tween9 = TweenMax.from(
    "#gallery2",
    1,
    {
      opacity: 0,
      y: 70,
      ease: Power1.easeOut,
    },
    "-=0.5"
  );
  const tween10 = TweenMax.from(
    "#gallery3",
    1,
    {
      opacity: 0,
      y: 70,
      ease: Power1.easeOut,
    },
    "-=0.8"
  );
  const tween11 = TweenMax.from(
    "#gallery4",
    1,
    {
      opacity: 0,
      x: 70,
      ease: Back.easeOut,
    },
    "-=1"
  );
  timeline3.add(tween7).add(tween8).add(tween9).add(tween10).add(tween11);
  const scene3 = new ScrollMagic.Scene({
    duration: 1200,
    triggerElement: ".portfolio-section",
    triggerHook: 0.9,
  })
    .setTween(timeline3)
    .addIndicators({ name: "SCENE", colorEnd: "#FFFFFF" })
    .addTo(controller);
});
