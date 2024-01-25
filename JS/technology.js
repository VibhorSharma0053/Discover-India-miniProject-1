function loadingPage() {
  var tl = gsap.timeline();
  tl.from(".header .nav a", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2
  });
  tl.from(".header .title h1", {
    y: -100,
    opacity: 0,
    duration: 0.7,
  });
  tl.from(".header .title h3", {
    y: -100,
    opacity: 0,
    duration: 0.7,
  });
  tl.from(".header h5", {
    duration: 1,
    y: 100,
    opacity: 0
  });
  tl.to(".header h5", {
    y: 40,
    repeat: -1,
    duration: 1,
    yoyo: true
  });
  tl.from(".advantage-india h2", {
    duration: 1,
    opacity: 0,
    rotate: 360,
    scale: 0,
  });
  tl.from(".advant", {
    x: 200,
    duration: 1,
    stagger: 0.5,
    opacity: 0,
    rotate: 180,
    scrollTrigger: {
      trigger: ".advantage-india",
      scroll: "body",
      // markers: true,
      start: "top 50%",
      end: "top 65%",
      scrub: 5,
    },
  });
  tl.from(".introduction .intro-left h3, .introduction .intro-left p, .introduction .intro-right img", {
    scale: 0,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".introduction",
      scroll: "body",
      // markers: true,
      start: "top 70%",
      end: "top 30%",
      scrub: 4,
    }
  });
  tl.from(".market h2, .market .market-content .market-left, .market .market-content .market-right, .market p", {
    y: 100,
    opacity: 0,
    delay: 0.25,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".market",
      scroll: "body",
      // markers: true,
      start: "top 55%",
      end: "top 30%",
      scrub: 6,
    }
  });
  tl.from(".development .dev-inner h2, .development .dev-inner p, .development .dev-inner ul li", {
    y:100,
    opacity: 0,
    delay: 0.25,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".development",
      scroll: "body",
      // markers: true,
      start: "top 55%",
      end: "top 30%",
      scrub: 6,
    }
  });
}
loadingPage();

// function loco() {
//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     // pinType: document.querySelector("#main").style.transform
//     //   ? "transform"
//     //   : "fixed",
//   });

//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//   // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }
// loco();
