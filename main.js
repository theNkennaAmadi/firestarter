import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

console.log("okay its working thing");

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
  },
  x: 500,
});
