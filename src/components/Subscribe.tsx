import { ReactElement } from "react";

export function Subscribe(): ReactElement {
  return (
    <div className="px-4 py-16 bg-black text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email…"
        />
        <button className="custom-button">Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2 gap-2">
        <input type="checkbox" />
        <p>Yes, I agree to receive email communications from DeFi.</p>
      </div>
    </div>
  );
}
