import React from "react";

const CGU = () => {
  
  return ( 
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 lg:grid-rows-12 min-h-screen">

      <section 
      style={{ position: "fixed", top: "70px", left: "30px"}} className="col-start-2 col-end-12 row-start-2 row-end-12 md:col-start-1 lg:col-start-2 lg:col-end-10 lg:row-start-3 lg:row-end-11 max-h-screen overflow-y-auto">
        <div className="container flex flex-col p-4 ">
		
          <h2 
            style={{ fontFamily: "ClashDisplay-Bold" }}
            className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold leading-none"
          >
            TERMS AND CONDITIONS OF USE (TCU)
          </h2>

          <div style={{ fontFamily: "ClashDisplay-Medium" }} className="flex flex-col divide-y divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-md  ">
                GENERAL
              </summary>
              <div className="pb-4 text-base">
                <p>
                  This website is operated by SAPES AVENUE. Throughout the site, the terms “we,” “us,” and “our” refer to SAPES AVENUE. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-md ">
                USE OF THE SITE
              </summary>
              <div className="pb-4 text-base">
                <p>
                  You may use our website for lawful purposes and in accordance with these terms and conditions. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-md  ">
                INTELLECTUAL PROPERTY RIGHTS
              </summary>
              <div className="pb-4 text-base">
                <p>
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by SAPES AVENUE, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-md ">
                PRODUCT INFORMATION
              </summary>
              <div className="pb-4 text-base">
                <p>
                  We make every effort to display as accurately as possible the colors and images of our products that appear on the website. However, we do not guarantee that the color or image displayed on your device will be accurate.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
  
  
  </div>
  );
};

export default CGU;
