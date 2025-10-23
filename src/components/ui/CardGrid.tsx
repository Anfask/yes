// "use client";
// import Image from "next/image";
// import "./CardGrid.scss";
// import { yesInfoCardData } from "@/utils/cardData";

// export default function CardGrid() {
//   return (
//     <div className="wrapper_section">
//       <div className="card_container">
//         {yesInfoCardData.map((item, i) => (
//           <div key={i} className="card_wrapper">
//             <a
//               href={item.link}
//               className="card"
//               style={{ backgroundColor: item.backgroundColor }}
//             >
//               <div className="imageWrapper">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="image"
//                 />
//               </div>

//               <div className="image_content">
//                 <h3>{item.title}</h3>
//               </div>
//             </a>

//             <a
//               href={item.link}
//               className="arrowButton"
//               style={{ backgroundColor: item.arrowColor }}
//               aria-label={`Read more about ${item.title}`}
//             >
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 50 50"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M37.1746 12.8259H17.468C17.0644 12.8259 16.6774 12.6656 16.392 12.3802C16.1066 12.0949 15.9463 11.7078 15.9463 11.3042C15.9463 10.9006 16.1066 10.5136 16.392 10.2282C16.6774 9.9428 17.0644 9.78247 17.468 9.78247H38.6963C39.0999 9.78247 39.4869 9.9428 39.7723 10.2282C40.0577 10.5136 40.218 10.9006 40.218 11.3042V32.6086C40.218 33.0121 40.0577 33.3992 39.7723 33.6846C39.4869 33.97 39.0999 34.1303 38.6963 34.1303C38.2927 34.1303 37.9056 33.97 37.6203 33.6846C37.3349 33.3992 37.1746 33.0121 37.1746 32.6086V12.8259Z"
//                   fill="black"
//                 />
//                 <path
//                   d="M37.6186 10.2268C37.9043 9.94105 38.2919 9.78052 38.696 9.78052C39.1001 9.78052 39.4876 9.94105 39.7734 10.2268C40.0591 10.5125 40.2196 10.9001 40.2196 11.3042C40.2196 11.7083 40.0591 12.0958 39.7734 12.3816L13.9038 38.2511C13.7623 38.3926 13.5943 38.5049 13.4095 38.5814C13.2246 38.658 13.0265 38.6974 12.8264 38.6974C12.6263 38.6974 12.4282 38.658 12.2433 38.5814C12.0585 38.5049 11.8905 38.3926 11.749 38.2511C11.6075 38.1096 11.4953 37.9417 11.4187 37.7568C11.3421 37.572 11.3027 37.3738 11.3027 37.1737C11.3027 36.9737 11.3421 36.7755 11.4187 36.5907C11.4953 36.4058 11.6075 36.2378 11.749 36.0964L37.6186 10.2268Z"
//                   fill="black"
//                 />
//               </svg>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// components/CardGrid.tsx
import Image from "next/image";
import "./CardGrid.scss";
import { yesInfoCardData } from "@/utils/cardData";

export default function CardGrid() {
  return (
<div className="wrapper_section">
      <div className="card_container">

        {yesInfoCardData.map((item, i) => (
          <div key={i} className="card_wrapper">
            <a
              href={item?.link}
              className="card"
              style={{ backgroundColor: item?.backgroundColor }}
            >
              <div className="imageWrapper">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  fill
                  className="image"
                />
              </div>

              <div className="image_content">
                <h3>{item?.title}</h3>
              </div>
            </a>

            <a
              href={item?.link}
              className="arrowButton"
              style={{ backgroundColor: item?.arrowColor }}
              aria-label={`Read more about ${item?.title}`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.1746 12.8259H17.468C17.0644 12.8259 16.6774 12.6656 16.392 12.3802C16.1066 12.0949 15.9463 11.7078 15.9463 11.3042C15.9463 10.9006 16.1066 10.5136 16.392 10.2282C16.6774 9.9428 17.0644 9.78247 17.468 9.78247H38.6963C39.0999 9.78247 39.4869 9.9428 39.7723 10.2282C40.0577 10.5136 40.218 10.9006 40.218 11.3042V32.6086C40.218 33.0121 40.0577 33.3992 39.7723 33.6846C39.4869 33.97 39.0999 34.1303 38.6963 34.1303C38.2927 34.1303 37.9056 33.97 37.6203 33.6846C37.3349 33.3992 37.1746 33.0121 37.1746 32.6086V12.8259Z"
                  fill="black"
                />
                <path
                  d="M37.6186 10.2268C37.9043 9.94105 38.2919 9.78052 38.696 9.78052C39.1001 9.78052 39.4876 9.94105 39.7734 10.2268C40.0591 10.5125 40.2196 10.9001 40.2196 11.3042C40.2196 11.7083 40.0591 12.0958 39.7734 12.3816L13.9038 38.2511C13.7623 38.3926 13.5943 38.5049 13.4095 38.5814C13.2246 38.658 13.0265 38.6974 12.8264 38.6974C12.6263 38.6974 12.4282 38.658 12.2433 38.5814C12.0585 38.5049 11.8905 38.3926 11.749 38.2511C11.6075 38.1096 11.4953 37.9417 11.4187 37.7568C11.3421 37.572 11.3027 37.3738 11.3027 37.1737C11.3027 36.9737 11.3421 36.7755 11.4187 36.5907C11.4953 36.4058 11.6075 36.2378 11.749 36.0964L37.6186 10.2268Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
</div>

  );
}