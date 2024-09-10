// /app/dashboard/page.js

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      {/* <!-- ===== Dashboard Start ===== --> */}
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Dashboard
              </h2>
              <button
                onClick={toggleDarkMode}
                className="text-body-color dark:text-body-color-dark p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <span className="text-gray-900 dark:text-gray-200">🌙</span>
                ) : (
                  <span className="text-gray-900 dark:text-gray-200">☀️</span>
                )}
              </button>
            </div>

            <div className="flex">
              <aside className="sidebar w-1/4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-lg mr-4">
                <nav>
                  <ul>
                    <li className="mb-4">
                      <Link
                        href="/dashboard/listed-jobs"
                        className="text-base font-medium text-body-color dark:text-body-color-dark transition-all duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        Listed Jobs
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/dashboard/applied-jobs"
                        className="text-base font-medium text-body-color dark:text-body-color-dark transition-all duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/create-job"
                        className="text-base font-medium text-body-color dark:text-body-color-dark transition-all duration-300 hover:text-primary dark:hover:text-primary"
                      >
                        Create a Job
                      </Link>
                    </li>
                  </ul>
                </nav>
              </aside>

              <main className="dashboard-content w-3/4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="p-4 rounded-lg bg-white dark:bg-black shadow-lg"
                >
                  <h1 className="text-2xl font-semibold text-black dark:text-white">
                    Welcome to the Dashboard
                  </h1>
                  {/* You can add more content or components here */}
                </motion.div>
              </main>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== Dashboard End ===== --> */}
    </>
  );
};

export default Dashboard;
