import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gauge } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center flex items-center justify-center min-h-dvh">
      <div>
        <Gauge strokeWidth={2} className="w-20 h-20 text-hero-green mx-auto" />
        {/* <Badge variant="destructive">ERROR</Badge> */}
        <h1 className="text-[40vw] md:text-[30vw] font-bold leading-tight">
          404
        </h1>
        <h3 className="text-xl md:text-4xl uppercase pb-12 dark:text-zinc-400 text-zinc-600">
          Page Not Found
        </h3>
        <Button>
          <ArrowLeft strokeWidth={1} className="w-4 h-4 mr-1" />
          <Link href="/">Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
