import AdSense from "@/components/AdSense";

const links = [
  { name: "티스토리", url: "https://blog.makelab.kr/", description: "개인 블로그" },
  { name: "LoopRoom", url: "https://looproom.makelab.kr/", description: "루프룸 프로젝트" },
  { name: "GitHub", url: "https://github.com", description: "내 깃허브 저장소" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Makelab
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Makelab Links
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            자주 사용하는 링크들을 정리했습니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* 첫 번째 광고 */}
          <div className="mb-8">
            <AdSense 
              adSlot="7183168015"
              className="text-center"
            />
          </div>

          {links.map((link, index) => (
            <>
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {link.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {link.description}
                    </p>
                  </div>
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 ml-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
              
              {/* 두 번째 링크 후에 광고 추가 */}
              {index === 1 && (
                <div className="my-8">
                  <AdSense 
                    adSlot="7183168015"
                    className="text-center"
                  />
                </div>
              )}
            </>
          ))}
        </div>

        {/* AdSense 광고 영역 */}
        <div className="mt-16">
          <AdSense 
            adSlot="7183168015"
            className="text-center"
          />
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Makelab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}