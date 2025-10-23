import { useEffect, useRef, useState } from "react";

export function useScrollReveal(key: string) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(key) === "true";
    }
    return false; // default for SSR
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isVisible) {
      sessionStorage.setItem(key, "true");
    }
  }, [isVisible, key]);

  return { elementRef, isVisible, setIsVisible };
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// export function useScrollReveal(key: string, threshold: number = 0.3) {
//   const elementRef = useRef<HTMLDivElement | null>(null);
//   const [isVisible, setIsVisible] = useState<boolean>(
//     sessionStorage.getItem(key) === "true"
//   );

//   useEffect(() => {
//     if (isVisible) return;

//     const element = elementRef.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           sessionStorage.setItem(key, "true");
//           observer.unobserve(element); // run once
//         }
//       },
//       { threshold }
//     );

//     observer.observe(element);
//     return () => observer.disconnect();
//   }, [isVisible, key, threshold]);

//   return { elementRef, isVisible };
// }
