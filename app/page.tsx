import Image from "next/image"
import { colors } from "./styles"

const variants = {
  background: [
    'bg-[#f4d04e]', 'bg-[#ffffff]',
    'bg-[#808080]', 'bg-[#121212]',
  ],
  text: [
    'text-[#f4d04e]', 'text-[#ffffff]',
    'text-[#808080]', 'text-[#121212]',
  ],
  hover: {
    background: [
      'hover:bg-[#f4d04e]', 'hover:bg-[#ffffff]',
      'hover:bg-[#808080]', 'hover:bg-[#121212]',
    ],
    text: [
      'hover:text-[#f4d04e]', 'hover:text-[#ffffff]',
      'hover:text-[#808080]', 'hover:text-[#121212]',
    ],
  },
}

export default function Home() {
  return (
    <div className={`rounded-xl border-solid border-[1px] bg-${colors.neutral.white} w-[32ch] shadow-[5px_5px_#121212]`}>
      <div className={`p-5`}>
        <div className={`flex flex-col gap-4`}>
          <div className={`self-center`}>
            <Image
              src={`/assets/images/illustration-article.svg`}
              alt="articles"
              width={50}
              height={50}
              className="w-auto h-auto rounded-md"
              priority
            />
          </div>

          <main className={`flex flex-col gap-2`}>
            <div>
              <button
                type="button"
                className={`bg-${colors.primary.yellow} text-${colors.neutral.black} rounded px-2 py-1 font-bold`}
              >
                Learning
              </button>

              <div className={`mt-2`}>
                <p className={`text-${colors.neutral.black} text-sm`}>
                  Published 21 Dec 2023
                </p>
              </div>
            </div>

            <div>
              <h1 className={`text-${colors.neutral.black} font-bold text-xl hover:text-${colors.primary.yellow}`}>
                HTML & CSS foundations
              </h1>
            </div>

            <div>
              <p className={`text-${colors.neutral.grey} font-bold text-sm`}>
                These languages are the backbone of{" "}
                every website defining structure,{" "}
                content and presentation.
              </p>
            </div>

            <div className={`mt-4`}>
              <div className={`flex flex-row gap-3 items-center`}>
              <Image
                  src={`/assets/images/image-avatar.webp`}
                  alt="avatar icon"
                  width={30}
                  height={30}
                  className={`w-auto h-auto`}
                />
                <h2 className={`text-${colors.neutral.black} font-bold`}>
                  Greg Hooper
                </h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
