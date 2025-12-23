import { Component1 } from "@/components/component-1";
import { Component2 } from "@/components/component-2";
import { Component3 } from "@/components/component-3";
import Component4 from "@/components/component-4";
import { Component5 } from "@/components/component-5";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#ee1902] to-[#ff2d02]">
      {/* Decorative background elements to show off glass blur */}
      {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] -z-10" /> */}

      <Component5 />
    </div>
  );
}