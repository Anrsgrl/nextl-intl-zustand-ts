"use client";
import usePersistStore from "@/store/persist";
import useBearStore from "@/store/store";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Steps");
  const placeholders = useTranslations("Placeholders");
  const { bears, increasePopulation } = useBearStore();
  const { persistBears, increasePersistPopulation } = usePersistStore();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <span className="h-[38px] flex text-4xl"> + 🌐Next-intl</span>
          <div className="flex items-center text-4xl">
            <span> + </span>
            <Image
              className="mx-2"
              src="/zustand.svg"
              alt="zustand logo"
              width={48}
              height={48}
              priority
            />
            <span>Zustand</span>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li key="step1" className="mb-2">
            {t.rich("step1", {
              folder: placeholders("folder"),
              example1: placeholders("example1"),
              example2: placeholders("example2"),
            })}
          </li>
          <li key="step2" className="mb-2">
            {t.rich("step2", {
              file: placeholders("file"),
            })}
          </li>
          <li key="step3" className="mb-2">
            {t.rich("step3", {
              provider: placeholders("provider"),
              layout: placeholders("layout"),
            })}
          </li>
          <li key="step4" className="mb-2">
            {t.rich("step4", {
              hook: placeholders("hook"),
            })}
          </li>
          <li key="step5" className="mb-2">
            {t.rich("step5", {
              url1: placeholders("url1"),
              url2: placeholders("url2"),
            })}
          </li>
          <li key="step6">
            {t.rich("step6", {
              file: "/store",
            })}
          </li>
        </ol>

        <div className="flex items-center text-3xl gap-4">
          <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold text-base">
            store/store.js
          </code>
          {bears}
          <button
            onClick={increasePopulation}
            className="px-2 aspect-square bg-white text-black hover:opacity-70 ease-linear duration-300 transition-all rounded-md"
          >
            +
          </button>
        </div>
        <div className="flex items-center text-3xl gap-4">
          <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold text-base">
            store/persist.js
          </code>{" "}
          {persistBears}
          <button
            onClick={increasePersistPopulation}
            className="px-2 aspect-square bg-white text-black hover:opacity-70 ease-linear duration-300 transition-all rounded-md"
          >
            +
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://templates.anarr.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {placeholders("all")}
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://zustand-demo.pmnd.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zustand docs →
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://next-intl.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next-intl docs →
          </a>
        </div>
      </main>
    </div>
  );
}
