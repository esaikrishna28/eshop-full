import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full  bg-cover bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?t=st=1713682283~exp=1713685883~hmac=3604b88f645f97e6f867b257bc47b61a9c7217a4d14248e7431391cb62962065&w=740)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Farmer's Corner  <br /> Where Fields Meet Homes
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Step into a world of freshness and community connection with our Farmers' Corner
        . Say goodbye to long supply chains and hello to direct-from-farm goodness
         <br /> Here, farmers turn their fields into your pantry, offering a bounty of locally grown delights. From sun-kissed fruits to garden-fresh veggies, every purchase supports 
         local agriculture and brings the taste of the land straight to your table{" "}
          <br /> Join us in celebrating the spirit of farming, one delicious harvest at a time. Explore our marketplace and savor the difference today!.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
