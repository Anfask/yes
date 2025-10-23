import "@/components/layout/layout.scss";
import Image from "next/image";

const FoundersMessage = () => {
  return (
    <div className="wrapper_section">
      <div className="found_message_section">
        <div className="founder_details">
          <div className="founder_img">

            <Image src={"/founder_img_mobile.png"} alt="founder-img" width={210} height={240} priority/>
          </div>
          <div className="founder_details_text">
            <p className="founder_name">Shoukath Naeemi Al Bukhari</p>
            <p className="position">Managing Director</p>
          </div>
        </div>
        <div className="message_box">
          <h2>Founder&apos;s message</h2>
          <div>
            <p>
              Mere education is not the solution for contemporary India, nor for
              the recent world. It solves problems, but only when it is alloyed
              with human values. Therefore, value-based education is the best
              development any country can fearlessly invest in. It is also the
              best service anyone can find everlasting satisfaction in.
            </p> <br />
            <p>
              Still, villages of our proud India miss it. This is because India
              is beyond calculations. YES India Foundation stands for
              value-based education, to bring up the best leaders of the next
              generation
            </p> <br />
            <p>Inviting you too to join us.</p>
          </div>
        </div>

        <svg
          className="qoutes_icon"
          width="189"
          height="129"
          viewBox="0 0 229 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.625 1.5H71.5625C78.7642 1.5 85.6658 4.31565 90.751 9.31934C95.8353 14.3222 98.6875 21.1024 98.6875 28.167V98.583C98.6875 116.853 91.3115 134.38 78.1748 147.307C65.0374 160.234 47.2143 167.5 28.625 167.5H14.3125C10.9067 167.5 7.64516 166.168 5.24414 163.806C2.84409 161.444 1.50009 158.246 1.5 154.917C1.5 151.588 2.84395 148.389 5.24414 146.027C7.64515 143.665 10.9067 142.333 14.3125 142.333H28.625C40.4028 142.333 51.7026 137.729 60.0381 129.527C68.3743 121.325 73.0625 110.194 73.0625 98.583V97.083H28.625C21.4234 97.083 14.5216 94.2681 9.43652 89.2646C4.35229 84.2618 1.50009 77.4814 1.5 70.417V28.167L1.50879 27.5049C1.68097 20.6799 4.51119 14.1658 9.43652 9.31934C14.5217 4.31565 21.4233 1.5 28.625 1.5ZM157.438 1.5H200.375C207.577 1.5 214.478 4.31564 219.563 9.31934C224.648 14.3222 227.5 21.1024 227.5 28.167V98.583C227.5 116.853 220.124 134.38 206.987 147.307C193.85 160.234 176.027 167.5 157.438 167.5H143.125C139.719 167.5 136.458 166.168 134.057 163.806C131.657 161.444 130.313 158.246 130.312 154.917C130.312 151.588 131.656 148.389 134.057 146.027C136.458 143.665 139.719 142.333 143.125 142.333H157.438C169.215 142.333 180.515 137.729 188.851 129.527C197.187 121.325 201.875 110.194 201.875 98.583V97.083H157.438C150.236 97.083 143.334 94.2681 138.249 89.2646C133.165 84.2618 130.313 77.4814 130.312 70.417V28.167C130.312 21.1024 133.165 14.3222 138.249 9.31934C143.334 4.31564 150.236 1.5 157.438 1.5Z"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Mobile--------------------------------> */}

      <div className="found_message_section_mobile d-md-none">
        <div className="found_img_container">
          <Image
            src="/founder_img_mobile.png"
            alt="Logo"
            width={159}
            height={182}
            priority
          />
          <h5>Shoukath Naeemi Al Bukhari</h5>
          <p>Managing Director</p>
        </div>

        <div className="founder_message_area">
          <h2>Founder’s Message</h2>
          <p>
            Mere education is not the solution for contemporary India, nor for
            the recent world. It solves problems, but only when it is alloyed
            with human values. Therefore, value-based education is the best
            development any country can fearlessly invest in. It is also the
            best service anyone can find everlasting satisfaction in. <br /> <br /> Still,
            villages of our proud India miss it. This is because India is beyond
            calculations. YES India Foundation stands for value-based education,
            to bring up the best leaders of the next generation <br /><br /> Inviting you too
            to join us.
          </p>
        </div>

  <svg  className="qoutes_icon"  width="101" height="75" viewBox="0 0 101 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.625 0.75H31.5625C34.7143 0.75 37.7355 1.98995 39.9619 4.19434C42.1881 6.39847 43.4375 9.38615 43.4375 12.5V43.75C43.4375 51.8367 40.1927 59.594 34.415 65.3145C28.6372 71.0349 20.7992 74.25 12.625 74.25H6.3125C4.83499 74.25 3.41953 73.6688 2.37695 72.6367C1.3346 71.6047 0.75 70.2063 0.75 68.75C0.75 67.2937 1.3346 65.8953 2.37695 64.8633C3.41953 63.8312 4.83499 63.25 6.3125 63.25H12.625C17.8441 63.25 22.8513 61.1971 26.5439 57.541C30.2367 53.8847 32.3125 48.924 32.3125 43.75V43H12.625C9.47316 43 6.45202 41.7601 4.22559 39.5557C1.99943 37.3515 0.75 34.3639 0.75 31.25V12.5C0.75 9.38615 1.99943 6.39847 4.22559 4.19434C6.45202 1.98995 9.47316 0.75 12.625 0.75ZM69.4375 0.75H88.375C91.5268 0.75 94.548 1.98995 96.7744 4.19434C99.0006 6.39847 100.25 9.38615 100.25 12.5V43.75C100.25 51.8367 97.0052 59.594 91.2275 65.3145C85.4497 71.0349 77.6117 74.25 69.4375 74.25H63.125C61.6475 74.25 60.232 73.6688 59.1895 72.6367C58.1471 71.6047 57.5625 70.2063 57.5625 68.75C57.5625 67.2937 58.1471 65.8953 59.1895 64.8633C60.232 63.8312 61.6475 63.25 63.125 63.25H69.4375C74.6566 63.25 79.6638 61.1971 83.3564 57.541C87.0492 53.8847 89.125 48.924 89.125 43.75V43H69.4375C66.2857 43 63.2645 41.7601 61.0381 39.5557C58.8119 37.3515 57.5625 34.3639 57.5625 31.25V12.5C57.5625 9.38615 58.8119 6.39847 61.0381 4.19434C63.2645 1.98995 66.2857 0.75 69.4375 0.75Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
</svg>
        <div>
          
        </div>
      </div>
      {/* Mobile--------------------------------> */}
    </div>
  );
};

export default FoundersMessage;
