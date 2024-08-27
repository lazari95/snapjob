"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Rreth SnapJob
              </h2>
              <p className="text-lg lg:text-xl xl:text-2xl text-white-600 leading-relaxed">
                SnapJob është një platformë revolucionare për kërkimin e punës që lidh punëkërkuesit 
                me punëdhënësit në një mënyrë të shpejtë dhe efikase. 
                Misioni ynë është të thjeshtojmë procesin e kërkimit të punës dhe të ndihmojmë 
                të dyja palët të gjejnë përputhjen perfekte. 
              </p>
              <br></br>
              <p className="text-lg lg:text-xl xl:text-2xl text-white-600 leading-relaxed">
                Synimi kryesor i SnapJob është të ofrojë mundësi për punë pjesë-kohë dhe punë ditore.
                Ne kemi një gamë të gjerë të vendeve të punës të disponueshme që mund të 
                përshtaten me orarin dhe nevojat tuaja. 
                Regjistrohuni sot dhe gjeni punën e ëndërrave tuaja me SnapJob.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
