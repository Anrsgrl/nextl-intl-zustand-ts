import { TranslationValues, useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Steps");
  const placeholders = useTranslations("Placeholders");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
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
          <li className="mb-2">
            {t.rich("step1", {
              folder: placeholders("folder"),
              example1: placeholders("example1"),
              example2: placeholders("example2"),
            })}
          </li>
          <li className="mb-2">
            {t.rich("step2", {
              file: placeholders("file"),
            })}
          </li>
          <li className="mb-2">
            {t.rich("step3", {
              provider: placeholders("provider"),
              layout: placeholders("layout"),
            })}
          </li>
          <li className="mb-2">
            {t.rich("step4", {
              hook: placeholders("hook"),
            })}
          </li>
          <li>
            {t.rich("step5", {
              url1: placeholders("url1"),
              url2: placeholders("url2"),
            })}
          </li>
        </ol>

        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://templates.anarr.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {placeholders("all")}
        </a>
      </main>
    </div>
  );
}
