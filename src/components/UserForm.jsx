import { useRef } from "react";

function UserForm() {
  const successModal = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    successModal.current.classList.remove("hidden");
    successModal.current.classList.add("flex");
  }

  return (
    <section className="py-8 md:py-10 bg-gray-100" id="dataEntryForm">
      <div className="max-w-[70rem] mx-auto my-0 md:px-8 px-10">
        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] rounded-lg items-center shadow-md full-container">
          <div className="bg-white py-12 px-6 justify-self-end form-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              20% discount for the first 1,000 subscribers
            </h2>
            <p className="text-gray-600 text-sm lg:text-base">
              Streamline your operations and grow your productivity now!!!
            </p>
            <form className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 items-center justify-center">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="source"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Where did you hear about us?
                  </label>
                  <select
                    id="source"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select an option</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 h-max mt-3"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div
            className="cta-img-box hidden md:flex"
            role="img"
            aria-label="Flowsync Customer Service"
          ></div>
        </div>
      </div>

      {/* Confirmation Modal */}

      <div
        id="successModal"
        ref={successModal}
        className="fixed inset-0 bg-gray-900 bg-opacity-70 items-center justify-center z-20 hidden"
      >
        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Success 👍🏻
            </h3>
            <p className="text-gray-600 mb-6">
              Welcome to the family. We will let you know about the further
              steps.
            </p>
            <button
              id="closeSuccessButton"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-150"
              onClick={() => {
                document.querySelector("#successModal").classList.add("hidden");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
