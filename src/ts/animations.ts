import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function initScrollAnimations(): void {
  const revealElements = document.querySelectorAll("[data-reveal]");

  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

export function initMagneticButtons(): void {
  const magneticElements = document.querySelectorAll("[data-magnetic]");

  magneticElements.forEach((el) => {
    const element = el as HTMLElement;

    element.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });
}

export function initSmoothScroll(): void {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;

      const target = document.querySelector(href);
      if (!target) return;

      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 },
        duration: 1,
        ease: "power3.inOut",
      });
    });
  });
}

export function initHeroAnimations(): void {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const tl = gsap.timeline({ delay: 0.2 });

  tl.fromTo(
    ".hero__badge",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
  )
    .fromTo(
      ".hero__title-word",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
      "-=0.3"
    )
    .fromTo(
      ".hero__title-accent",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(
      ".hero__description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      ".hero__cta .btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
      "-=0.3"
    )
    .fromTo(
      ".hero__scroll",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    )
    .fromTo(
      ".hero__social",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
      "-=0.4"
    );
}
