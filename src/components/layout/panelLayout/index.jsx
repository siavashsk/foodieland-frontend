import React from "react";
import PanelFooter from "./panelFooter";
import PanelHeader from "./panelHeader";
import PanelSidebar from "./panelSidebar";

const PanelLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:h-screen flex flex-col  bg-lightPurple">
      <PanelHeader />
      <section className="flex flex-wrap max-h-[83%] basis-[90%] ">
        <div className="basis-[97%] sm:basis-[80%] mx-auto md:basis-[20%]">
          <PanelSidebar />
        </div>
        <div className="basis-[97%]  max-h-full sm:basis-[80%] mx-auto overflow-auto">
          <div className="flex  justify-center py-[20px]">
            <main className="w-11/12 mx-5 my-3 h-5/6 bg-white shadow-xl rounded-md">
              {children}
            </main>
          </div>
        </div>
      </section>
      <PanelFooter />
    </div>
  );
};

export default PanelLayout;
