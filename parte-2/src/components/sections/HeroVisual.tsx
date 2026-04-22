import { Terminal } from "@/components/ui/terminal/Terminal";
import { SentimentCard } from "@/components/sections/floating-cards/SentimentCard";
import { ImageClassificationCard } from "@/components/sections/floating-cards/ImageClassificationCard";
import { DataVizCard } from "@/components/sections/floating-cards/DataVizCard";
import { ChatbotCard } from "@/components/sections/floating-cards/ChatbotCard";

export function HeroVisual() {
  return (
    <>
      {/* Mobile — Terminal only, no floating cards */}
      <div aria-hidden="true" className="block lg:hidden">
        <div className="relative mx-auto mt-8 max-w-sm">
          {/* Subtle glow behind terminal */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="size-48 rounded-full bg-brand-cyan/6 blur-3xl" />
          </div>
          <Terminal />
        </div>
      </div>

      {/* Desktop — full composition with floating cards */}
      <div
        aria-hidden="true"
        className="relative hidden h-[660px] lg:block"
      >
        {/* Center glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="size-72 rounded-full bg-brand-cyan/6 blur-3xl" />
        </div>

        {/* Terminal — centered, main focal point */}
        <div
          className="absolute z-10"
          style={{
            width: 520,
            top: "50%",
            left: "46%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Terminal />
        </div>

        {/* Sentiment Analysis — top right */}
        <SentimentCard className="right-2 top-[68px] z-20" />

        {/* Image Classification — middle right */}
        <ImageClassificationCard className="right-0 top-[30%] z-20" />

        {/* Data Viz — bottom left */}
        <DataVizCard className="bottom-[60px] left-[-28px] z-20" />

        {/* Chatbot — bottom right */}
        <ChatbotCard className="bottom-[50px] right-2 z-20" />
      </div>
    </>
  );
}