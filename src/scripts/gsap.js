import { gsap } from 'gsap';
export function animateCard(el) {
  gsap.from(el, { y: -20, opacity: 0, duration: 0.5 });
}
