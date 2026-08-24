import React from "react";
import { ArrowLeft } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F0E8] text-ink flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <span className="text-xs font-bold text-cobalt tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink">
          Page Not Found
        </h1>
        <p className="text-base text-ink/70 font-normal">
          The requested page does not exist in this digital portfolio.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-cobalt text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-cobalt-hover transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
