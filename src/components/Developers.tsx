import { ReactElement } from "react";
import terminal from "../assets/terminal.png";

export function Developers(): ReactElement {
  return (
    <div className="text-white bg-black">
      <div className="maw-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            Checkout the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-16 md:p-0">
          {/* Se podría poner «shadow-lg shadow-cyan-500/50» */}
          <img
            className="max-w-[250px] shadow-[0px_0px_12px] shadow-[var(--primary-blue)]"
            src={terminal}
            alt="terminal"
          />
        </div>
      </div>
    </div>
  );
}
