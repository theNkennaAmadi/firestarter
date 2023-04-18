import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

console.log("now we are talking 3 ");

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
  },
  x: 500,
});
