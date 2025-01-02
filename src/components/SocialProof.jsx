import { useEffect, useRef } from "react";
import { motion } from "motion/react";

function SocialProof() {
  const videoOverLay = useRef(null);
  const videoPlayer = useRef(null);

  useEffect(function () {
    videoPlayer.current.addEventListener("click", function () {
      videoOverLay.current.classList.remove("hide");
    });

    videoOverLay.current.addEventListener("click", function () {
      this.classList.add("hide");
    });
  }, []);

  return (
    <section className="py-14 md:py-16">
      <div className="container mx-auto px-4">
        <span className="text-center block text-sm font-semibold text-orange-600 tracking-widest uppercase mb-3">
          Testimonials
        </span>
        <h2 className="text-2xl md:text-3xl tracking-normal font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border"
            variants={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              final: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial={"initial"}
            whileInView={"final"}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex justify-center">
              <img
                src="/assets/Customer/Customer-1.jpg"
                alt="Customer Image"
                className="rounded-full h-20 w-20"
              />
            </div>
            <div className="text-gray-600 italic flex flex-col justify-center">
              <div className="font-fontSansSerif text-5xl text-blue-500 -mt-4">
                &ldquo;
              </div>
              Flowsync saved us hours every week!
            </div>
            <p className="text-blue-600 font-semibold mt-2 text-xs">
              - John D., CEO
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border"
            variants={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              final: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial={"initial"}
            whileInView={"final"}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex justify-center">
              <img
                src="/assets/Customer/Customer-2.jpg"
                alt="Customer Image"
                className="rounded-full h-20 w-20"
              />
            </div>
            <div className="text-gray-600 italic flex flex-col justify-center">
              <div className="font-fontSansSerif text-5xl text-blue-500 -mt-4">
                &ldquo;
              </div>
              A game-changer for our team.
            </div>
            <p className="text-blue-600 font-semibold mt-2 text-xs">
              - Sarah K., Manager
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border"
            variants={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              final: {
                opacity: 1,
                scale: 1,
              },
            }}
            initial={"initial"}
            whileInView={"final"}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="flex justify-center">
              <img
                src="/assets/Customer/Customer-3.jpg"
                alt="Customer Image"
                className="rounded-full h-20 w-20"
              />
            </div>
            <div className="text-gray-600 italic flex flex-col justify-center">
              <div className="font-fontSansSerif text-5xl text-blue-500 -mt-4">
                &ldquo;
              </div>
              The best investment we made this year.
            </div>
            <p className="text-blue-600 font-semibold mt-2 text-xs">
              - Alex T., Founder
            </p>
          </motion.div>
        </div>

        {/* Video testimonial */}
        <div className="relative mt-8 video-testimonial" ref={videoPlayer}>
          <video
            id="testimonial-video"
            autoPlay
            loop
            muted
            poster="/assets/video/video-thumbnail.png"
            className="h-[70vh] w-full object-cover cursor-pointer -z-10 rounded-lg"
          >
            <source
              src="/assets/video/video-testimonial.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-testimonial-text p-4 md:p-6 lg:p-9 hidden md:flex">
            <blockquote className="video-testimonial-comment text-base md:text-lg">
              <div className="font-fontSansSerif text-5xl -mb-3">&ldquo;</div>
              I&rsquo;m already getting calls from people all around the world
              in different functions who have heard about Flowsync and want to
              get onboard.
            </blockquote>
            <div className="testimonial-meta">
              <p className="video-testimonial-author">Eric Watson</p>
              <p className="video-testimonial-author-position">
                Director of Customer Success, Trend Micro
              </p>
            </div>
          </div>
          <div className="video-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="play-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Section for Modal and video overlays */}
      <div className="video-player-overlay hide" ref={videoOverLay}>
        <video
          id="full-player"
          controls
          autoPlay
          loop
          poster="/assets/video/video-thumbnail.png"
        >
          <source src="/assets/video/video-testimonial.mp4" type="video/mp4" />
          Video playback is not supported in your browser.
        </video>
      </div>
    </section>
  );
}

export default SocialProof;
