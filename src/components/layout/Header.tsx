"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
    { href: "/institutions", label: "Institutions" },
  { href: "/academic", label: "Academic" },
  { href: "/yesCare", label: "Yes Care" },
  { href: "/gallery", label: "Gallery" },
  { href: "/states", label: "States" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header_section">
      <div className="d-lg-none">
        <Image src="/logo.png" alt="Logo" width={86} height={38} priority />
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Logo" width={176} height={78} priority />
        </Link>

        <ul className="navlinks">
          {navLinks.map((link) => {
            const isActive = pathname === link?.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav_link ${isActive ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)} // close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="button_container">
        <button>Contact Us</button>
      </div>

      <div className="d-lg-none mobile_toggle" onClick={toggleMenu}>
        {menuOpen ? (
          // Close Icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.5C0 3.67031 0.670312 3 1.5 3H19.5C20.3297 3 21 3.67031 21 4.5C21 5.32969 20.3297 6 19.5 6H1.5C0.670312 6 0 5.32969 0 4.5ZM3 12C3 11.1703 3.67031 10.5 4.5 10.5H22.5C23.3297 10.5 24 11.1703 24 12C24 12.8297 23.3297 13.5 22.5 13.5H4.5C3.67031 13.5 3 12.8297 3 12ZM21 19.5C21 20.3297 20.3297 21 19.5 21H1.5C0.670312 21 0 20.3297 0 19.5C0 18.6703 0.670312 18 1.5 18H19.5C20.3297 18 21 18.6703 21 19.5Z"
              fill="#2A1B63"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;



// "use client";
// import React from "react";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/services", label: "Our Work" },
//   { href: "/impact", label: "Our Impact" },
//   { href: "/Gallery", label: "Gallery" },
//   { href: "/join", label: "Join Us" },

//   //   { href: "/contact", label: "Contact Us" },
// ];

// const Header = () => {
//   const pathname = usePathname();

//   return (
//     <header className="header_section">
//       <div className="d-lg-none">
//         <Image src="/logo.png" alt="Logo" width={86} height={38} priority />
//       </div>
//       <nav>
//         <Link href="/" className="logo">
//           <Image src="/logo.png" alt="Logo" width={176} height={78} priority />
//         </Link>

//         <ul className="navlinks">
//           {navLinks.map((link) => {
//             const isActive = pathname === link?.href;
//             return (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={`nav_link ${isActive ? "active" : ""}`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       <div className="button_container">
//         <button>Contact Us</button>
//       </div>
//       <div className="d-lg-none">
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 4.5C0 3.67031 0.670312 3 1.5 3H19.5C20.3297 3 21 3.67031 21 4.5C21 5.32969 20.3297 6 19.5 6H1.5C0.670312 6 0 5.32969 0 4.5ZM3 12C3 11.1703 3.67031 10.5 4.5 10.5H22.5C23.3297 10.5 24 11.1703 24 12C24 12.8297 23.3297 13.5 22.5 13.5H4.5C3.67031 13.5 3 12.8297 3 12ZM21 19.5C21 20.3297 20.3297 21 19.5 21H1.5C0.670312 21 0 20.3297 0 19.5C0 18.6703 0.670312 18 1.5 18H19.5C20.3297 18 21 18.6703 21 19.5Z"
//             fill="#2A1B63"
//           />
//         </svg>
//       </div>
//     </header>
//   );
// };

// export default Header;
