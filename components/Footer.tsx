import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mr-4  md:flex mb-4">
            <div className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20">
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
              <span className="font-medium text-black dark:text-white">
                Looply
              </span>
            </div>
          </div>
          <div>Copyright © 2024 Looply Labs</div>
          <div className="mt-2">All rights reserved</div>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/pricing"
            >
              Pricing
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="#"
            >
              Refund Policy
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="https://twitter.com/shubham6822"
            >
              Twitter
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="https://linkedin.com/in/shubham"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
              href="https://github.com/shubham6822"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
