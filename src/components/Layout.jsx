import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import PageTransition from './PageTransition';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/webdev', label: 'Web Dev' },
  { path: '/smma', label: 'SMMA' },
  { path: '/flipping', label: 'Flipping' },
  { path: '/contact', label: 'Contact' },
];

const bibleVerses = [
  { verse: 'Philippians 4:13', text: '"I can do all things through Christ who strengthens me."' },
  { verse: 'Proverbs 3:5-6', text: '"Trust in the Lord with all your heart and lean not on your own understanding."' },
  { verse: 'Joshua 1:9', text: '"Be strong and courageous. Do not be afraid; do not be discouraged."' },
  { verse: 'Romans 8:28', text: '"And we know that in all things God works for the good of those who love him."' },
  { verse: 'Isaiah 40:31', text: '"But those who hope in the Lord will renew their strength."' },
  { verse: 'Jeremiah 29:11', text: '"For I know the plans I have for you, declares the Lord."' },
  { verse: 'Psalm 46:1', text: '"God is our refuge and strength, an ever-present help in trouble."' },
];

export default function Layout({ children }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Show all nav links on every page
  const currentNavLinks = navLinks;
  
  // Get a "random" verse based on the day
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const currentVerse = bibleVerses[dayOfYear % bibleVerses.length];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                MM
              </span>
              <span className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400">
                Michael Morrison
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {currentNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? '☀️' : '🌙'}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <div className="w-5 h-5 flex flex-col justify-center gap-1">
                  <span className={`block h-0.5 w-5 bg-gray-600 dark:bg-gray-400 transform transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-gray-600 dark:bg-gray-400 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-gray-600 dark:bg-gray-400 transform transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-2">
                {currentNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Michael Morrison. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Cypress, CA
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                {currentVerse.text}
              </p>
              <p className="text-xs text-gray-300 dark:text-gray-600 mt-0.5">
               , {currentVerse.verse} (NCB)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
