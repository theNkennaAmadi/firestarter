import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

console.log("okay lets move this box");

const boxElem = document.querySelector(".box");
const width = boxElem.clientWidth;

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    scrub: true,
  },
  x: 500,
});
