import { Plus, MoveUpRight, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

function Navigation() {
  const solMenu = useRef(null);
  const solSubMenu = useRef(null);
  // State for +/- buttons. Should have seperate UI state for each expandable menu items
  const [menuExpanded, setMenuExpanded] = useState(false);

  // State for controlling styles of floating menu
  const [menuFloating, setMenuFloating] = useState(false);
  const { scrollY } = useScroll();

  // Check the Y scroll position for flaot set
  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 250) {
      // Set the style for sticky navigation
      setMenuFloating(true);
    } else {
      // Remove the style for sticky navigation
      setMenuFloating(false);
    }
  });

  useEffect(function () {
    // Register all the hover events in Menu
    solMenu.current.addEventListener("mouseover", function () {
      solSubMenu.current.classList.remove("hidden");
      setMenuExpanded(true);
    });

    solMenu.current.addEventListener("mouseout", function () {
      solSubMenu.current.classList.add("hidden");
      setMenuExpanded(false);
    });

    solSubMenu.current.addEventListener("mouseover", function () {
      solSubMenu.current.classList.remove("hidden");
      setMenuExpanded(true);
    });

    solSubMenu.current.addEventListener("mouseout", function () {
      solSubMenu.current.classList.add("hidden");
      setMenuExpanded(false);
    });
  }, []);

  return (
    <motion.nav
      className={`fixed hidden lg:block rounded-full py-1 px-1 left-[33%] z-10 top-6 ${
        menuFloating ? "shadow-2xl" : "shadow-sm"
      }`}
      animate={menuFloating ? "floating" : "fixed"}
      variants={{
        floating: {
          backgroundColor: "#fff",
          left: "23%",
          paddingLeft: "0.25rem ",
          paddingRight: "0.1rem",
        },
        fixed: {
          backgroundColor: "rgb(248 250 252 / 0.8)",
          paddingLeft: "0.25rem ",
          paddingRight: "0.25rem",
        },
      }}
    >
      <ul
        className={`flex gap-10 text-black font-medium pl-3 ${
          menuFloating ? "" : "pr-3"
        }`}
      >
        <li>
          <a
            href="#"
            className="hover:bg-slate-400/80 flex gap-1 justify-center items-center py-2 px-[0.5rem] rounded-xl"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group hover:bg-slate-400/80 flex gap-1 justify-center items-center py-2 px-[0.5rem] rounded-xl"
            ref={solMenu}
          >
            Solutions
            <span className="group-hover:rotate-180 transition-all duration-200">
              {menuExpanded ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </span>
          </a>

          {/* The sub menu */}
          <div
            className="text-black fixed top-[4.5rem] left-[20%] right-[10%] min-h-[38.4rem] hidden"
            ref={solSubMenu}
          >
            <div className="grid grid-cols-2 gap-4 bg-gradient-to-r from-white to-sky-50 rounded-xl shadow-md mt-5">
              <div className="grid grid-cols-2 gap-4 px-6 py-4">
                <div>
                  <h4 className="font-light text-lg text-stone-600 mb-2">
                    Products
                  </h4>
                  <ul className="flex flex-col gap-6">
                    <li className="hover:bg-sky-300 hover:rounded-lg p-2">
                      <a href="#">
                        <p className="font-semibold text-base">
                          Customer Success
                        </p>
                        <p className="font-light text-sm">
                          Drive successful outcome and grow revenue.
                        </p>
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-2">
                      <a href="#">
                        <p className="font-semibold text-base">
                          Professional Services
                        </p>
                        <p className="font-light text-sm">
                          Deliver world class service and promote loyality.
                        </p>
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-2 relative after:content-['BETA'] after:uppercase after:font-normal after:text-xs after:bg-slate-500 after:text-white after:px-2 after:py-[0.1rem] after:rounded-full after:absolute after:top-1 after:right-1 after:tracking-widest">
                      <a href="#">
                        <p className="font-semibold text-base">Sales</p>
                        <p className="font-light text-sm">
                          Streamline your sales process and stuffs.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-light text-lg text-stone-600 mb-4">
                    Industries
                  </h4>
                  <ul className="flex flex-col gap-3 font-normal">
                    <li className="hover:bg-sky-300 hover:rounded-lg p-1 flex">
                      <a href="#" className="w-full">
                        Softwares
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-1 flex">
                      <a href="#" className="w-full">
                        Business Service
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-1 flex">
                      <a href="#" className="w-full">
                        Connected Business
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-1 flex">
                      <a href="#" className="w-full">
                        Financial Service
                      </a>
                    </li>
                    <li className="hover:bg-sky-300 hover:rounded-lg p-1 flex">
                      <a href="#" className="w-full">
                        IT Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-soln-img text-white relative group">
                <div className="absolute bottom-4 left-4">
                  <a
                    href="#"
                    className="font-semibold text-xl flex flex-col gap-2 group-hover:text-2xl"
                  >
                    <span className="flex gap-2 items-center group-hover:underline group-hover:underline-offset-4 transition-all duration-300">
                      Overview{" "}
                      <MoveUpRight className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                    </span>
                    <p className="font-light text-sm">
                      A customer platform built to combine enterprise grade
                      studies with customers.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End of submenu */}
        </li>

        <li>
          <a
            href="#"
            className="hover:bg-slate-400/80 flex gap-1 justify-center items-center py-2 px-[0.5rem] rounded-xl"
          >
            Pricing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:bg-slate-400/80 flex gap-1 justify-center items-center py-2 px-[0.5rem] rounded-xl"
          >
            Contact Us
          </a>
        </li>

        <motion.li className={`py-2 ${menuFloating ? "" : "hidden"}`}>
          <a
            href="#dataEntryForm"
            className="px-5 py-3 bg-blue-700 rounded-full text-white font-semibold hover:bg-blue-800"
          >
            Request a demo
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Navigation;
