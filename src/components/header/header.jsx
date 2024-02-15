"use client";

import { ThemeToggle } from "@/app/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { links } from "@/lib/data";
import { AlignJustify, Gauge, LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="border-b border-zinc-200 dark:border-zinc-800 py-3 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main"
    >
      <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-4">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="font-bold text-hero-green uppercase flex items-center gap-2"
            >
              <Gauge strokeWidth={1} />
              <span>
                Sol
                <span className="dark:text-zinc-200 text-zinc-500">ution</span>
              </span>
            </Link>
            <div className="flex md:hidden">
              <button onClick={() => setOpen(!open)}>
                <AlignJustify strokeWidth={1} size={36} />
              </button>
            </div>
          </div>
          <nav
            className={`flex-col py-6 md:py-0 md:flex gap-6 md:flex-row ${
              open ? "flex" : "hidden"
            }`}
          >
            <ul className="md:flex gap-3">
              {links.map((link) => (
                <li key={link.id}>
                  <Button variant="link" asChild>
                    <Link href={link.path} className="pl-0 text-xl md:text-sm">
                      {link.title}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-2 md:mt-0 flex justify-between gap-6 dark:border-zinc-800 order-first md:order-none">
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Sign in</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[calc(100vw_-_2rem)] sm:w-80 mx-4 md:mx-0 md:ml-4 p-6 shadow-lg">
                    <div className="grid gap-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium leading-none">
                          Sign in
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Don't have an account?{" "}
                          <Link href="/register" className="text-blue-500">
                            Sign up
                          </Link>
                        </p>
                      </div>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            className="col-span-2 h-10"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="psw">Password</Label>
                          <Input
                            id="psw"
                            type="password"
                            className="col-span-2 h-10"
                          />
                        </div>
                        <div className="mt-4">
                          <Button className="w-full">
                            <LogIn strokeWidth={1} className="w-4 h-4 mr-1" />{" "}
                            Sign in
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
