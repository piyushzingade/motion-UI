import { Component1 } from "@/components/component-1";
import { Component2 } from "@/components/component-2";
import { Component3 } from "@/components/component-3";
import Component4 from "@/components/component-4";
import { Component5 } from "@/components/component-5";
import Component6 from "@/components/component-6";
import Component7 from "@/components/component-7";
import Component7Light from "@/components/component-7-light";
import Component8 from "@/components/component-8";
import Hero1 from "@/components/hero-1";

export default function Home() {
  return (
    <div className=" min-h-screen">
      {/* Decorative background elements to show off glass blur */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] -z-10" /> */}

      <Hero1 />
    </div>
  );
}
