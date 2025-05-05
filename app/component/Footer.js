import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-extrabold tracking-wide">ChaiYeah</h2>
                <p className="text-sm text-gray-400">
                    A platform for crowdfunding with a chai twist.<br />
                    &copy; 2025 ChaiYeah. All rights reserved.
                </p>
            </div>

            <div className="text-center md:text-right flex items-center gap-2 text-sm text-gray-300">
                <span> Made with ❤️ by   </span>
                <span className="font-semibold text-white">Jatin Sharma</span>
            </div>
        </footer>
    );
};

export default Footer;
