import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-5 px-6 md:px-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between">
        {/* Left - Brand and Description */}
        <div>
          <h2 className="text-4xl font-black tracking-tight text-white">
            Chai<span className="text-yellow-400">Yeah</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-md">
            A modern crowdfunding platform with a chai twist. Built for creators, backed by devs.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            &copy; 2025 ChaiYeah. All rights reserved.
          </p>
        </div>

        {/* Right - Author & Socials */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-pink-500">❤️</span>
            <span>by</span>
            <span className="text-white font-semibold">Jatin Sharma</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/Jatin-Sharma-Nitaj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.774.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.652.24 2.873.117 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.478 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jatin-sharma69/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.6 0 4.266 2.37 4.266 5.456v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
