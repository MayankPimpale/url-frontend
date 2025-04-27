import React, { useState } from "react";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [responseURL, setResponseURL] = useState("");

  const [isShortedURl, setIsShortedURL] = useState(false);

  const navigate = useNavigate();

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };

  const token = localStorage.getItem("token");

  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
  const isValidUrl = (url) => urlRegex.test(url);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(responseURL)
      .then(() => toast.success("Copied to clipboard!"))
      .catch((err) => toast.error("Copy failed"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("user not login");
      navigate("/sign-in");
    } else if (url.length == 0) {
      toast.error("please enter a url");
    } else if (isValidUrl(url)) {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/urls/create-url`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
          }
        );

        if (response.ok) {
          setLoading(false);
          const res = await response.json();
          setResponseURL(res.data.shortUrl);
          setIsShortedURL(true);
        }
      } catch (error) {
        setLoading(false);
        console.log("error while shortning the url", error);
      }
    } else {
      toast.error("please enter a valid url");
    }
  };

  return (
    <div className="min-h-[87vh]">
      <div className="flex justify-center mt-2 px-5 py-3 max-lg:flex-col max-lg:items-center max-lg:gap-8">
      <div className="font-bold text-6xl font-sans w-[35vw] mt-8 max-lg:w-[90vw] max-lg:mt-3 max-md:mt-1 max-lg:text-5xl max-md:text-4xl max-sm:text-[1.7em] text-center">
    <h1 className="my-2 max-md:text-5xl">One Platform. Every Link.</h1>

    <h1 className="font-thin text-4xl max-sm:text-3xl max-lg:mb-3">
      More than a short link — it's your brand, simplified.
    </h1>

    <a href="/">
      <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 transition-transform transform hover:scale-105 duration-300 rounded-full text-white text-lg max-md:text-base px-7 py-3 shadow-lg fixed bottom-5 right-5">
        🔗 Get Started
      </button>
    </a>
</div>

</div>


      <div className="flex flex-col items-center gap-8 bg-sky-800 mx-auto w-[92vw] max-w-5xl rounded-xl py-12 px-6 mb-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold text-center">
          🔗 Trim Long URLs Instantly
        </h2>
        <p className="text-lg text-center text-gray-200 max-w-md">
          Paste your long boring link below and get a clean, short one in
          seconds. Fast. Easy. Shareable.
        </p>
        {/* URL Input + Button */}
        <div className="flex items-center gap-4 flex-wrap justify-center w-full">
          <input
            type="text"
            value={url}
            onChange={handleUrl}
            placeholder="Enter Long Link Here"
            className="rounded-xl py-3 px-4 border border-gray-300 w-full max-w-md outline-none text-black"
          />
          {!loading ? (
            <button
              className="bg-blue-500 rounded-xl py-3 px-6 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
              onClick={handleSubmit}
            >
              ✂️ Shorten It!
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-3 text-center inline-flex items-center transition-all duration-300"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Spinner SVG Path */}
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591..."
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624..."
                  fill="currentColor"
                />
              </svg>
              Cooking your link...
            </button>
          )}
        </div>

        {/* Shortened URL Section */}
        {isShortedURl && (
          <div className="flex items-center gap-4 flex-wrap justify-center w-full">
            <input
              type="text"
              value={responseURL}
              placeholder="Shortened URL"
              className="rounded-xl py-3 px-4 border border-gray-300 w-full max-w-md outline-none text-black"
              readOnly
            />
            <button
              className="bg-green-500 rounded-xl py-3 px-6 text-white font-semibold hover:bg-green-600 transition-all duration-300"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        )}
      </div>

      <section class="pt-2 bg-gray-50 sm:pt-2 pb-8">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Simplify Your Links with Our Smart URL Shortener
            </p>
            <h1 class="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              Shorten, manage, and track your URLs effortlessly. Our powerful
              tool helps you share cleaner links and get real-time analytics for
              every click.
            </h1>
            <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="/"
                class="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get Started
              </a>
              <a
                href="/"
                class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                See Analytics
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
