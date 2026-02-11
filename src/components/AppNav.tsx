import { Home, BookOpen, ClipboardCheck, Moon, Sun, Sparkles, Menu, X, BookMarked } from 'lucide-react';

export type NavPage = 'home' | 'modules' | 'module' | 'quiz' | 'glossary';

export interface AppNavProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onToggleDark: () => void;
  overallProgress: number;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function AppNav({
  currentPage,
  onNavigate,
  onToggleDark,
  overallProgress,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: AppNavProps) {
  const nav = (page: NavPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-200/50 dark:border-gray-800" aria-label="Pagrindinė navigacija">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-2 rounded-xl shadow-sm">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Promptų <span className="gradient-text">anatomija</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {overallProgress > 0 && (
              <div className="flex items-center gap-2 mr-4 px-3 py-1.5 bg-brand-50 dark:bg-brand-900/20 rounded-full" role="img" aria-label={`Bendras pažangos procentas: ${overallProgress} procentų`}>
                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" aria-hidden="true">
                  <div
                    className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {overallProgress}%
                </span>
              </div>
            )}

            <button
              onClick={onToggleDark}
              className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Perjungti tamsųjį režimą"
            >
              <Moon className="w-5 h-5 dark:hidden" strokeWidth={1.5} />
              <Sun className="w-5 h-5 hidden dark:block" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => nav('home')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 min-h-[44px] ${
                currentPage === 'home'
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
              }`}
              aria-label="Pagrindinis puslapis"
              aria-current={currentPage === 'home' ? 'page' : undefined}
            >
              <Home className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Pagrindinis</span>
            </button>

            <button
              onClick={() => nav('modules')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 min-h-[44px] ${
                currentPage === 'modules' || currentPage === 'module'
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
              }`}
              aria-label="Moduliai"
              aria-current={currentPage === 'modules' || currentPage === 'module' ? 'page' : undefined}
            >
              <BookOpen className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Moduliai</span>
            </button>

            <button
              onClick={() => nav('glossary')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 min-h-[44px] ${
                currentPage === 'glossary'
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
              }`}
              aria-label="Žodynėlis"
              aria-current={currentPage === 'glossary' ? 'page' : undefined}
            >
              <BookMarked className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Žodynėlis</span>
            </button>

            <button
              onClick={() => nav('quiz')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 min-h-[44px] ${
                currentPage === 'quiz'
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
              }`}
              aria-label="Apklausa"
              aria-current={currentPage === 'quiz' ? 'page' : undefined}
            >
              <ClipboardCheck className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Apklausa</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {overallProgress > 0 && (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-brand-50 dark:bg-brand-900/20 rounded-full" role="img" aria-label={`Pažanga: ${overallProgress}%`}>
                <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" aria-hidden="true">
                  <div
                    className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {overallProgress}%
                </span>
              </div>
            )}

            <button
              onClick={onToggleDark}
              className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Perjungti tamsųjį režimą"
            >
              <Moon className="w-5 h-5 dark:hidden" strokeWidth={1.5} />
              <Sun className="w-5 h-5 hidden dark:block" strokeWidth={1.5} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800 animate-fade-in overflow-hidden">
            <div className="py-2 space-y-1">
              <button
                onClick={() => nav('home')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left min-h-[48px] ${
                  currentPage === 'home'
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                }`}
                aria-label="Pagrindinis puslapis"
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                <Home className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Pagrindinis</span>
              </button>

              <button
                onClick={() => nav('modules')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left min-h-[48px] ${
                  currentPage === 'modules' || currentPage === 'module'
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                }`}
                aria-label="Moduliai"
                aria-current={currentPage === 'modules' || currentPage === 'module' ? 'page' : undefined}
              >
                <BookOpen className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Moduliai</span>
              </button>

              <button
                onClick={() => nav('glossary')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left min-h-[48px] ${
                  currentPage === 'glossary'
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                }`}
                aria-label="Žodynėlis"
                aria-current={currentPage === 'glossary' ? 'page' : undefined}
              >
                <BookMarked className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Žodynėlis</span>
              </button>

              <button
                onClick={() => nav('quiz')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left min-h-[48px] ${
                  currentPage === 'quiz'
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95'
                }`}
                aria-label="Apklausa"
                aria-current={currentPage === 'quiz' ? 'page' : undefined}
              >
                <ClipboardCheck className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Apklausa</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
