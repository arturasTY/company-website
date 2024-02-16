import { Gauge, MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { links, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="pb-6">
        <div className="border-b dark:border-zinc-800 border-zinc-200 py-10">
          <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-4">
            <p className="sm:text-lg mb-2 text-zinc-500 uppercase">
              Let&#39;s talk
            </p>
            <div className="flex items-center group">
              <a
                href="mailto:email@email.com"
                className="xs:text-2xl text-3xl sm:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-zinc-500">info</span>@solution.net
              </a>
              <span className="w-10 h-10 sm:w-12 sm:h-12 flex bg-zinc-500 rounded-full items-center justify-center ml-5 sm:mt-3 group-hover:bg-hero-green ease-in-out duration-300">
                <MoveUpRight strokeWidth={1} className="" />
              </span>
            </div>
          </div>
        </div>
        <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,0.5fr] auto-cols-auto gap-y-6 md:gap-y-16 pt-16 items-start">
            <Link
              href="/"
              className="font-bold text-hero-green uppercase flex items-center gap-2"
            >
              <Gauge strokeWidth={1} />
              <span className="text-3xl">
                Sol
                <span className="dark:text-zinc-200 text-zinc-500">ution</span>
              </span>
            </Link>
            <div>
              <p className="dark:text-zinc-400 text-md">
                Automated dashboard management for professional business
                profiles.
              </p>
            </div>
            <div>
              <p className="dark:text-zinc-400">
                11-14 Varle Road
                <br /> Tunbridge Wells
                <br /> TN1 1RX
              </p>
              <div className="mt-6">
                <Button variant="outline" className="rounded-full pl-1 pr-5">
                  <span className="bg-opace-red w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <span className="bg-red-600 w-2.5 h-2.5 block rounded-full"></span>
                  </span>
                  No Vacancies
                </Button>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <p className=" font-medium mb-2">Overview</p>
                <ul className="[&>*:not(:last-child)]:mb-1">
                  {links.map((link) => (
                    <li key={link.id} className="relative">
                      <Link
                        href={link.path}
                        className="dark:text-zinc-400 before:absolute before:w-1.5 before:h-1.5 before:bg-hero-green before:top-[40%] before:-left-6 before:rounded-full before:opacity-0 hover:before:-left-3.5  hover:before:opacity-100 before:ease-in-out before:duration-300"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className=" font-medium mb-2">Social</p>
                <ul className="[&>*:not(:last-child)]:mb-1">
                  {socialLinks.map((socialLink) => (
                    <li key={socialLink.id} className="relative">
                      <Link
                        href={socialLink.path}
                        className="dark:text-zinc-400 before:absolute before:w-1.5 before:h-1.5 before:bg-hero-green before:top-[40%] before:-left-6 before:rounded-full before:opacity-0 hover:before:-left-3.5  hover:before:opacity-100 before:ease-in-out before:duration-300"
                      >
                        {socialLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t dark:border-zinc-800 border-zinc-200 pt-6 text-xs dark:text-zinc-400">
              <a href="/">Terms &amp; Conditions</a>
            </div>
            <div className="border-t dark:border-zinc-800 border-zinc-200 pt-6 text-xs flex justify-between dark:text-zinc-400">
              &copy; Solution {new Date().getFullYear()}
              <div>
                <span>
                  Developed by{" "}
                  <a href="mailto:a.tyvoniak@gmail.com">Arturas Ty</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
