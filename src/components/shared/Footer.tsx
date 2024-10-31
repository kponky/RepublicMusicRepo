import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-[1] bg-black main-footer">
      <div className="flex flex-col justify-end relative z-[1 ]h-full">
        <div className="py-[3px] flex justify-center pb-[100px]w-full">
          {/* footertop */}
          <div className="mt-20 flex items-center justify-end flex-wrap">
            <div className="flex justify-between w-[90%] max-w-[800px] flex-col flex-nowrap mx-auto mt-[150px] mb-[100px]">
              <div className="text-left mb-[30px]">
                <h2 className="text-[56px] lowercase font-bold text-white">
                  sign up for exclusive new artist & music updates!
                </h2>
              </div>
              {/* sign up form */}
              <div className="w-full max-w-[750px] text-center mx-auto pb-12 px-4">
                <div className="mb-5">Sign up for the republic record</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          {/* marquee */}
          <div></div>
          {/* footer bottom */}
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
