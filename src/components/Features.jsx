import { UsersRound, Brain, Blocks } from "lucide-react";

function Features() {
  return (
    <section className="py-14 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <span className="text-center block text-sm font-semibold text-orange-600 tracking-widest uppercase mb-3">
          Features
        </span>
        <h2 className="text-2xl md:text-3xl tracking-normal font-bold text-center mb-8">
          Why should you choose Flowsync
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2">
            <Blocks className="w-14 h-14" />
            <h3 className="font-semibold text-lg mt-2">Seamless Integration</h3>
            <p className="text-gray-600 -mt-2 font-extralight text-sm">
              Connect with tools like Slack, Zoom, and Google Workspace.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2">
            <UsersRound className="w-14 h-14" />
            <h3 className="font-semibold text-lg mt-2">
              Real-Time Collaboration
            </h3>
            <p className="text-gray-600 -mt-2 font-extralight text-sm">
              Work together with your team, no matter where you are.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2">
            <Brain className="w-14 h-14" />
            <h3 className="font-semibold text-lg mt-2">AI-Powered Insights</h3>
            <p className="text-gray-600 -mt-2 font-extralight text-sm">
              Get actionable analytics with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;