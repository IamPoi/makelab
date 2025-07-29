import Link from "next/link";
import AdSense from "@/components/AdSense";

const linkCategories = [
  {
    title: "개발 도구",
    links: [
      { name: "GitHub", url: "https://github.com", description: "코드 저장소 및 협업" },
      { name: "Visual Studio Code", url: "https://code.visualstudio.com", description: "코드 에디터" },
      { name: "Stack Overflow", url: "https://stackoverflow.com", description: "개발자 Q&A" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "웹 개발 문서" },
    ]
  },
  {
    title: "디자인 & UI",
    links: [
      { name: "Figma", url: "https://figma.com", description: "UI/UX 디자인 도구" },
      { name: "Dribbble", url: "https://dribbble.com", description: "디자인 영감" },
      { name: "Behance", url: "https://behance.net", description: "크리에이티브 포트폴리오" },
      { name: "Unsplash", url: "https://unsplash.com", description: "무료 고품질 이미지" },
    ]
  },
  {
    title: "학습 & 문서",
    links: [
      { name: "React 공식 문서", url: "https://react.dev", description: "React 학습 자료" },
      { name: "Next.js 공식 문서", url: "https://nextjs.org/docs", description: "Next.js 가이드" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", description: "CSS 프레임워크" },
      { name: "TypeScript 핸드북", url: "https://www.typescriptlang.org/docs", description: "TypeScript 문서" },
    ]
  },
  {
    title: "유틸리티",
    links: [
      { name: "JSON Formatter", url: "https://jsonformatter.curiousconcept.com", description: "JSON 포맷터" },
      { name: "Can I Use", url: "https://caniuse.com", description: "브라우저 호환성 검사" },
      { name: "RegExr", url: "https://regexr.com", description: "정규표현식 테스터" },
      { name: "Lorem Ipsum Generator", url: "https://www.lipsum.com", description: "더미 텍스트 생성" },
    ]
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-3xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Makelab
            </Link>
            <nav>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            유용한 링크 모음
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            개발과 디자인에 유용한 사이트들을 카테고리별로 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {linkCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {link.description}
                        </p>
                      </div>
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 ml-4 mt-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AdSense 광고 영역 */}
        <div className="max-w-4xl mx-auto mt-16 px-4">
          <AdSense 
            adSlot="0987654321"
            className="text-center"
          />
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              더 많은 링크 추가 예정
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              지속적으로 유용한 사이트들을 추가하고 업데이트할 예정입니다.
            </p>
          </div>
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