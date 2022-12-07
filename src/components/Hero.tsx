import { ReactElement } from "react";
import heroVid from "../assets/video.mp4";

export function Hero(): ReactElement {
  return (
    <div className="w-full h-[90vh] mt-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          {/* también se puede poner: className="text-[var(--primary-blue)]" */}
          <span className="blue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="custom-button m-3">Use Defi</button>
          {/* https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes */}
          <button className="custom-button m-3 bg-none border border-[var(--primary-blue)]">
            FAQ
          </button>
        </div>
      </div>
      <p className="text-center text-white text-2xl font-bold">
        Total Volume Secured: 142,104,783,662.47
      </p>
    </div>
  );
}
