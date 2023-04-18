import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

console.log("final ");

const bodyElem = document.querySelector("body");

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
  },
  x: 500,
});
