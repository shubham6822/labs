import React from 'react'

export default function Footer() {
    return (
        <div className="fixed bottom-6 w-full flex justify-center z-50">
            <div
                className="border-2 border-black rounded-full bg-white text-black py-2 px-3 sm:px-6 shadow-lg mx-auto w-auto sm:w-auto"
                style={{ opacity: 1, transform: "none" }}
            >
                <div className="flex items-center justify-center gap-4 sm:gap-4">
                    <nav className="flex items-center gap-6 sm:gap-4">
                        <div className="hidden sm:flex items-center gap-4">
                            <a
                                className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                                href="#how-it-works"
                            >
                                How it works
                            </a>
                            <a
                                className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                                href="#pricing"
                            >
                                Pricing
                            </a>
                        </div>
                        <a
                            className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                            href="#portfolio"
                        >
                            Work
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex text-sm text-gray-600 hover:text-black hover:underline transition-colors items-center"
                            href="https://twitter.com/prajwaltomar_"
                        >
                            <span className="flex items-center">
                                <span>Connect on X</span>
                            </span>
                        </a>
                    </nav>
                    <button className="justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 rounded-full bg-black text-white hover:bg-gray-800 text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap">
                        <span>Book a Call</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right w-3 h-3"
                        >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
