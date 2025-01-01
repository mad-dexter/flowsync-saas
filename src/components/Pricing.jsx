import { Check, X } from "lucide-react";

function Pricing() {
  return (
    <section className="py-14 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <span className="text-center block text-sm font-semibold text-orange-600 tracking-widest uppercase mb-3">
          Pricing
        </span>
        <h2 className="text-2xl md:text-3xl tracking-normal font-bold text-center mb-8">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white px-6 py-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">
              Free Plan
            </h3>
            <p className="font-medium text-2xl flex justify-center items-center">
              $<span className="text-7xl font-semibold">0</span>
            </p>
            <p className="text-gray-600 mb-6">
              Basic features for individuals.
            </p>
            <ul className="list-none flex flex-col gap-4 px-2 justify-center ml-2 mb-11">
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                Collaboration Tools Integration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <X className="text-red-500" />
                Real-Time Collaboration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <X className="text-red-500" />
                AI-Powered Insights
              </li>
            </ul>
            <a
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
              href="#dataEntryForm"
            >
              Get Started
            </a>
          </div>

          <div className="bg-blue-200 px-6 py-8 rounded-lg shadow-lg relative overflow-hidden after:content-['Best\00a0Value'] after:uppercase after:absolute after:top-[4.8%] after:right-[-6.5%] after:font-bold after:text-[0.7rem] after:px-6 after:py-1 after:rotate-45 after:bg-[#FFE6B7] after:text-black after:z-[5]">
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">
              Pro Plan
            </h3>
            <p className="font-medium text-2xl flex justify-center items-center">
              $
              <span className="text-7xl font-semibold tracking-tighter">
                89
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              Advanced tools for small teams.
            </p>
            <ul className="list-none flex flex-col gap-4 px-2 justify-center ml-2 mb-11">
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                Collaboration Tools Integration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                Real-Time Collaboration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <X className="text-red-500" />
                AI-Powered Insights
              </li>
            </ul>
            <a
              href="#dataEntryForm"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>

          <div className="bg-white px-6 py-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold tracking-wider mb-4 uppercase">
              Enterprise Plan
            </h3>
            <p className="font-medium text-2xl flex justify-center items-center">
              $
              <span className="text-7xl font-semibold tracking-tighter">
                199
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              Custom solutions for large organizations.
            </p>
            <ul className="list-none flex flex-col gap-4 px-2 justify-center ml-2 mb-11">
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                Collaboration Tools Integration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                Real-Time Collaboration
              </li>
              <li className="grid grid-cols-[10fr_90fr] justify-items-start items-center gap-1 text-sm font-light tracking-wide">
                <Check className="text-green-500" />
                AI-Powered Insights
              </li>
            </ul>
            <a
              href="#dataEntryForm"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
