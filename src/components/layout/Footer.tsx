"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/academic", label: "Academic" },
    { href: "/yesCare", label: "Yes Care" },
    { href: "/gallery", label: "Gallery" },
        { href: "/joinUs", label: "Join Us" },
    { href: "/alumni", label: "Alumni" },
        { href: "/gpt", label: "Yes GPT" },
  ];

  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Top Footer */}
        <div className="main_footer_contents_wrapper">
          {/* Logo + About */}
          <div className="footer_logo">
            <Link href="/" className="logo">
              <Image
                src="/footer_logo.png"
                alt="Logo"
                width={176}
                height={78}
                priority
              />
            </Link>
            <p>
              Yes India empowers minds through <br />
              learning, lifts lives with care, builds <br />
              hope with action, and plants seeds <br />
              of change where it matters most.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer_navlinks">
            <h5>Quick Links</h5>
            <ul>
              {navLinks.map((list, i) => (
                <li key={i}>
                  <Link
                    href={list?.href}
                    className={`nav_link ${
                      pathname === list.href ? "active" : ""
                    }`}
                  >
                    {list?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="location_container">
            <div>
              <h5>Registered Office</h5>
              <p>
                RKP - V/720-A12, YES square, <br /> Calicut, Kerala - 673633
              </p>
            </div>

            <div>
              <h5>Administrative Office</h5>
              <p>
                A -15, Nizamuddin west, <br /> New Delhi, India - 110013
              </p>
            </div>
          </div>

          {/* Contact + Social */}
          <div className="footer_contact_container">
            <div>
              <h5>Contact</h5>
              <a href="mailto:info@yesindiafoundation.com">
                info@yesindiafoundation.com
              </a>
              <p style={{ marginTop: "6px" }}>
                <a href="tel:+919895662111">+91 989 566 2111</a>
              </p>
            </div>

            <div className="footer-socials">
              <h5>Get In Touch</h5>
             <ul>
                <li>
                  {" "}
                  <Link href={"#"} aria-label="facebook">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.66464 17.9168H10.998V11.2418H14.0013L14.3313 7.92516H10.998V6.25016C10.998 6.02915 11.0858 5.81719 11.242 5.66091C11.3983 5.50463 11.6103 5.41683 11.8313 5.41683H14.3313V2.0835H11.8313C10.7262 2.0835 9.66643 2.52248 8.88502 3.30388C8.10362 4.08529 7.66464 5.14509 7.66464 6.25016V7.92516H5.99797L5.66797 11.2418H7.66464V17.9168Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href={"#"} aria-label="instagram">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0003 13.3332C10.8844 13.3332 11.7322 12.982 12.3573 12.3569C12.9825 11.7317 13.3337 10.8839 13.3337 9.99984C13.3337 9.11578 12.9825 8.26794 12.3573 7.64281C11.7322 7.01769 10.8844 6.6665 10.0003 6.6665C9.11627 6.6665 8.26842 7.01769 7.6433 7.64281C7.01818 8.26794 6.66699 9.11578 6.66699 9.99984C6.66699 10.8839 7.01818 11.7317 7.6433 12.3569C8.26842 12.982 9.11627 13.3332 10.0003 13.3332Z"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z"
                        stroke="white"
                        strokeWidth="1.25"
                      />
                      <path
                        d="M14.583 5.42518L14.5913 5.41602"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href={"#"} aria-label="x">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9006 8.92667L6.91225 3.335C6.866 3.27004 6.80487 3.21708 6.73398 3.18055C6.6631 3.14401 6.5845 3.12497 6.50475 3.125H4.39975C4.308 3.12512 4.21805 3.15048 4.13975 3.19831C4.06146 3.24613 3.99783 3.31458 3.95583 3.39616C3.91384 3.47773 3.8951 3.56929 3.90167 3.6608C3.90824 3.75232 3.93987 3.84026 3.99308 3.915L9.09892 11.0733M10.9006 8.92667L16.0064 16.085C16.0596 16.1597 16.0913 16.2477 16.0978 16.3392C16.1044 16.4307 16.0857 16.5223 16.0437 16.6038C16.0017 16.6854 15.938 16.7539 15.8597 16.8017C15.7814 16.8495 15.6915 16.8749 15.5997 16.875H13.4947C13.415 16.875 13.3364 16.856 13.2655 16.8195C13.1946 16.7829 13.1335 16.73 13.0872 16.665L9.09892 11.0733M10.9006 8.92667L15.7689 3.125M9.09892 11.0733L4.23058 16.875"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link href={"#"} aria-label="linkedIn">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_224_739)">
                        <path
                          d="M16.25 1.25H1.24609C0.558594 1.25 0 1.81641 0 2.51172V17.4883C0 18.1836 0.558594 18.75 1.24609 18.75H16.25C16.9375 18.75 17.5 18.1836 17.5 17.4883V2.51172C17.5 1.81641 16.9375 1.25 16.25 1.25ZM5.28906 16.25H2.69531V7.89844H5.29297V16.25H5.28906ZM3.99219 6.75781C3.16016 6.75781 2.48828 6.08203 2.48828 5.25391C2.48828 4.42578 3.16016 3.75 3.99219 3.75C4.82031 3.75 5.49609 4.42578 5.49609 5.25391C5.49609 6.08594 4.82422 6.75781 3.99219 6.75781ZM15.0117 16.25H12.418V12.1875C12.418 11.2188 12.3984 9.97266 11.0703 9.97266C9.71875 9.97266 9.51172 11.0273 9.51172 12.1172V16.25H6.91797V7.89844H9.40625V9.03906H9.44141C9.78906 8.38281 10.6367 7.69141 11.8984 7.69141C14.5234 7.69141 15.0117 9.42188 15.0117 11.6719V16.25Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_224_739">
                          <rect width="17.5" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer_copyright">
          <p>© 2025 Yes India Foundation, All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Footer = () => {
//   const pathname = usePathname();
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Our Work" },
//     { href: "/contact", label: "Our Impact" },
//     { href: "/contact", label: "Gallery" },
//     { href: "/contact", label: "Join Us" },
//     { href: "/contact", label: "Alumni" },
//   ];
//   return (
//     <footer>
//       <div className="footer_container">
//         <div className="main_footer_contents_wrapper">
//           <div className="footer_logo">
//             <Link href="/" className="logo">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={176}
//                 height={78}
//                 priority
//               />
//             </Link>
//             <p>
//               Yes India empowers minds through <br />
//               learning, lifts lives with care, builds <br /> hope with action,
//               and plants seeds <br /> of change where it matters most.
//             </p>
//           </div>

//           <div className="footer_navlinks">
//             <h5>Quick Links</h5>
//             <div>
//               <ul>
//                 {navLinks.map((list, i) => (
//                   <li key={i}>
//                     <Link
//                       href={list?.href}
//                       className={`nav_link ${pathname === list.href} ${
//                         list.href.split("/")[1]
//                       }`}
//                     >
//                       {list?.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="location_container">
//             <div>
//               <h5>Registered Office</h5>
//               <Link href={"#"}>
//                 RKP - V/720-A12, YES square, <br /> Calicut, Kerala - 673633
//               </Link>
//             </div>

//             <div>
//               <h5>Administrative Office</h5>
//               <Link href={"#"}>
//                 A -15, Nizamuddin west, <br /> New Delhi, India - 110013
//               </Link>
//             </div>
//           </div>

//           <div className="footer_contact_container">
//             <div>
//               {" "}
//               <h5>Contact</h5>
//               <Link href={"info@yesindiafoundation.com"}>
//                 info@yesindiafoundation.com
//               </Link>
//               <p style={{ marginTop: "6px" }}>
//                 {" "}
//                 <Link href={"#"}>+91 989 566 2111</Link>
//               </p>
//             </div>

//             <div className="footer-socials">
//               <h5>Get In Touch</h5>
//               <ul>
//                 <li>
//                   {" "}
//                   <Link href={"#"} aria-label="facebook">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M7.66464 17.9168H10.998V11.2418H14.0013L14.3313 7.92516H10.998V6.25016C10.998 6.02915 11.0858 5.81719 11.242 5.66091C11.3983 5.50463 11.6103 5.41683 11.8313 5.41683H14.3313V2.0835H11.8313C10.7262 2.0835 9.66643 2.52248 8.88502 3.30388C8.10362 4.08529 7.66464 5.14509 7.66464 6.25016V7.92516H5.99797L5.66797 11.2418H7.66464V17.9168Z"
//                         fill="white"
//                       />
//                     </svg>
//                   </Link>
//                 </li>
//                 <li>
//                   {" "}
//                   <Link href={"#"} aria-label="instagram">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.0003 13.3332C10.8844 13.3332 11.7322 12.982 12.3573 12.3569C12.9825 11.7317 13.3337 10.8839 13.3337 9.99984C13.3337 9.11578 12.9825 8.26794 12.3573 7.64281C11.7322 7.01769 10.8844 6.6665 10.0003 6.6665C9.11627 6.6665 8.26842 7.01769 7.6433 7.64281C7.01818 8.26794 6.66699 9.11578 6.66699 9.99984C6.66699 10.8839 7.01818 11.7317 7.6433 12.3569C8.26842 12.982 9.11627 13.3332 10.0003 13.3332Z"
//                         stroke="white"
//                         strokeWidth="1.25"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z"
//                         stroke="white"
//                         strokeWidth="1.25"
//                       />
//                       <path
//                         d="M14.583 5.42518L14.5913 5.41602"
//                         stroke="white"
//                         strokeWidth="1.25"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </Link>
//                 </li>
//                 <li>
//                   {" "}
//                   <Link href={"#"} aria-label="x">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.9006 8.92667L6.91225 3.335C6.866 3.27004 6.80487 3.21708 6.73398 3.18055C6.6631 3.14401 6.5845 3.12497 6.50475 3.125H4.39975C4.308 3.12512 4.21805 3.15048 4.13975 3.19831C4.06146 3.24613 3.99783 3.31458 3.95583 3.39616C3.91384 3.47773 3.8951 3.56929 3.90167 3.6608C3.90824 3.75232 3.93987 3.84026 3.99308 3.915L9.09892 11.0733M10.9006 8.92667L16.0064 16.085C16.0596 16.1597 16.0913 16.2477 16.0978 16.3392C16.1044 16.4307 16.0857 16.5223 16.0437 16.6038C16.0017 16.6854 15.938 16.7539 15.8597 16.8017C15.7814 16.8495 15.6915 16.8749 15.5997 16.875H13.4947C13.415 16.875 13.3364 16.856 13.2655 16.8195C13.1946 16.7829 13.1335 16.73 13.0872 16.665L9.09892 11.0733M10.9006 8.92667L15.7689 3.125M9.09892 11.0733L4.23058 16.875"
//                         stroke="white"
//                         strokeWidth="1.25"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </Link>
//                 </li>

//                 <li>
//                   {" "}
//                   <Link href={"#"} aria-label="linkedIn">
//                     <svg
//                       width="18"
//                       height="20"
//                       viewBox="0 0 18 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g clipPath="url(#clip0_224_739)">
//                         <path
//                           d="M16.25 1.25H1.24609C0.558594 1.25 0 1.81641 0 2.51172V17.4883C0 18.1836 0.558594 18.75 1.24609 18.75H16.25C16.9375 18.75 17.5 18.1836 17.5 17.4883V2.51172C17.5 1.81641 16.9375 1.25 16.25 1.25ZM5.28906 16.25H2.69531V7.89844H5.29297V16.25H5.28906ZM3.99219 6.75781C3.16016 6.75781 2.48828 6.08203 2.48828 5.25391C2.48828 4.42578 3.16016 3.75 3.99219 3.75C4.82031 3.75 5.49609 4.42578 5.49609 5.25391C5.49609 6.08594 4.82422 6.75781 3.99219 6.75781ZM15.0117 16.25H12.418V12.1875C12.418 11.2188 12.3984 9.97266 11.0703 9.97266C9.71875 9.97266 9.51172 11.0273 9.51172 12.1172V16.25H6.91797V7.89844H9.40625V9.03906H9.44141C9.78906 8.38281 10.6367 7.69141 11.8984 7.69141C14.5234 7.69141 15.0117 9.42188 15.0117 11.6719V16.25Z"
//                           fill="white"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_224_739">
//                           <rect width="17.5" height="20" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="footer_copyright">
//           <p>© 2025 Yes India Foundation, All rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
