"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-[60] md:hidden flex flex-col gap-1.5 p-2 relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-primary-100 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-primary-100 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-primary-100 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <nav
        className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-primary-950 md:bg-transparent z-50 md:z-10 text-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center pt-20 md:pt-0 px-8 md:px-0">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex gap-3 items-center"
                onClick={() => setIsOpen(false)}
              >
                <img
                  className="rounded-full h-8 w-8"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
                <span>Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
