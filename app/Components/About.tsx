import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-screen bg-green-200 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-3 bg-red-400 flex justify-center items-center">
        <Image
          src="/MYDP.png"
          alt="My Profile Picture"
          width={400}
          height={300}
          className="rounded-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 p-3 bg-blue-400 flex justify-center items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reiciendis
          maiores. Quod at repudiandae nihil eius fugiat, laudantium iure hic
          ipsa, vel pariatur asperiores quasi quas ad nulla id dicta. Maiores id
          ad hic nam, explicabo aliquid, similique vero neque ullam accusamus
          laudantium alias quae consequuntur repudiandae obcaecati, quos omnis?
        </p>
      </div>
    </div>
  );
};

export default About;
