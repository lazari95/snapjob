"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `ÇMIMI`,
                subtitle: `Çmimi i Thjeshtë`,
                description: `Modeli ynë i çmimeve është i qartë dhe i thjeshtë. Pagoni vetëm për punët që merrni përmes faqes sonë të internetit.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:justify-start lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full max-w-sm lg:max-w-none">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                1{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  Euro / Punë
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pagë për Punë
              </h4>
              <p>
                Çmimi ynë është i thjeshtë: 1 Euro për punë të marrë përmes portalit. Asnjë tarifë e fshehtë ose plane të komplikuara.
              </p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Çmimi i Shkurtër
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Pa Tarifë Abonimi
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Pagoni Vetëm për Postim pune
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
