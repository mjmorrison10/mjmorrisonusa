import { useState, useEffect } from 'react';

export default function ProjectCard({ project, featured = false }) {
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = project.screenshots && project.screenshots.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % project.screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasMultipleImages, project.screenshots]);

  return (
    <div className={`group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
      featured 
        ? 'border-2 border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20 hover:shadow-2xl' 
        : 'border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
    }`}>
      {/* Browser Preview */}
      <div className="relative bg-gray-200 dark:bg-gray-700 p-2">
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 mb-2 px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 bg-gray-300 dark:bg-gray-600 rounded-md px-3 py-0.5 text-xs text-gray-500 dark:text-gray-400 truncate">
            {project.liveUrl}
          </div>
        </div>
        {/* Screenshot area */}
        <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="relative" style={{ paddingBottom: '60%' }}>
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={import.meta.env.BASE_URL + screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Dots for multiple images */}
              {hasMultipleImages && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-blue-500' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="relative" style={{ paddingBottom: '60%' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {featured && (
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">
              ⭐ FEATURED
            </span>
          </div>
        )}
        
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          {project.badge && (
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium">
              {project.badge}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stats.map((stat, i) => (
            <span key={i} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-xs">
              ✓ {stat}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center transition-colors"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
