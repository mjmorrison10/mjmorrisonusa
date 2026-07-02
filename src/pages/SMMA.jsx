import { useState } from 'react';
import ContactFormMini from '../components/ContactFormMini';

const platforms = [
  { name: 'Instagram', followers: '37.4K', views: '2.4M/mo', status: 'Banned', icon: '📸' },
  { name: 'YouTube', followers: '34.5K', views: '1-2K/2wk', status: 'Banned', icon: '🎬' },
  { name: 'Facebook', followers: '34K+', views: '1-2.5K/2wk', status: 'Banned', icon: '👥' },
  { name: 'TikTok', followers: '39.7K', views: 'Viral', status: 'Banned', icon: '🎵' },
  { name: 'Snapchat', followers: '168.7K', views: 'Active', status: 'Active', icon: '👻' },
];

const milestones = [
  {
    date: 'October 2021',
    title: 'Joined a Growing Education Community',
    description: 'Joined a fast-growing online business education community at 1,000 members. Started learning affiliate marketing and content strategy from experienced mentors.',
    icon: '🎓',
  },
  {
    date: '2022',
    title: 'Pioneered Facebook & Snapchat',
    description: 'When conventional wisdom said Facebook and Snapchat weren\'t viable for growth, I ignored the advice and proved it wrong. Eventually became the unofficial Facebook & Snapchat captain.',
    icon: '🚀',
  },
  {
    date: '2022-2023',
    title: 'Built Multi-Platform Empire',
    description: 'Grew audiences across 9+ platforms simultaneously. Generated 5-50M monthly views. Most viral video hit 20M views.',
    icon: '📈',
  },
  {
    date: '2023',
    title: 'Recruited to Exclusive Team',
    description: 'Selected for a 5-6 person team working directly with senior leadership on flagship product launches and brand content.',
    icon: '⭐',
  },
  {
    date: '2023',
    title: 'Platform Captain',
    description: 'Became the official Facebook & Snapchat captain, managing brand accounts and testing official content strategy at scale.',
    icon: '👑',
  },
  {
    date: '2024',
    title: 'Platform Bans',
    description: 'Accounts banned due to content targeting (not policy violations). Pivoted skills into web development and flipping.',
    icon: '🔄',
  },
];

const skills = [
  'Content Creation & Editing',
  'Podcast-to-Clip Conversion',
  'Multi-Platform Strategy',
  'Audience Growth',
  'Campaign Management',
  'Affiliate Training',
  'Platform Algorithm Mastery',
  'Viral Content Optimization',
];

export default function SMMA() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              📱 Social Media Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              They Said Facebook Was Dead.
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                I Proved Them Wrong.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              50M+ monthly views. 314,300 followers built. Platform captain. Recruited to an exclusive 
              5-person team. When they said "it won't work," I proved them wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">50M+</div>
              <div className="text-sm text-purple-100">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">314,300</div>
              <div className="text-sm text-purple-100">Followers Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">9+</div>
              <div className="text-sm text-purple-100">Platforms Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">20M</div>
              <div className="text-sm text-purple-100">Single Video Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {['story', 'platforms', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  The Facebook Rebel
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    October 2021. 1,000 members. That's when I joined a fast-growing online business 
                    education community teaching affiliate marketing on TikTok, Instagram, and YouTube.
                  </p>
                  <p>
                    One day, a mentor gave a lesson: if you're already editing for Instagram, take the extra 
                    5 minutes to upload to YouTube too. Most students took that literally. I took it to 
                    the extreme, <strong>why not upload to every platform possible?</strong>
                  </p>
                  <p>
                    I started uploading to Facebook and Snapchat. When I told other affiliates about my 
                    success, the leadership told students <strong>not to bother with Facebook or Snapchat 
                    because it was redundant.</strong>
                  </p>
                  <p className="text-gray-900 dark:text-white font-semibold text-lg">
                    I ignored that advice.
                  </p>
                  <p>
                    I kept uploading. I kept growing. Eventually, one of my mentees started dominating 
                    Facebook, and leadership had to admit Facebook was viable. They changed their teaching 
                    to include all platforms.
                  </p>
                  <p>
                    <strong>Today, Facebook is one of the most stable and profitable platforms for 
                    affiliates.</strong> YouTube and TikTok bans are rampant. Instagram is risky. But 
                    Facebook? It's thriving.
                  </p>
                  <p>
                    Even fellow captains have said: <em>"If it weren't for Michael sticking it through on Facebook, 
                    we probably would've quit during those hard times."</em>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Platforms Tab */}
          {activeTab === 'platforms' && (
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{platform.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          platform.status === 'Active' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {platform.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Followers</span>
                        <span className="font-medium text-gray-900 dark:text-white">{platform.followers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Performance</span>
                        <span className="font-medium text-gray-900 dark:text-white">{platform.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Screenshot Proofs */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  📸 The Proof
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                  <div>
                    <img loading="lazy" 
                      src={import.meta.env.BASE_URL + 'instagram-screenshot.webp'} 
                      alt="Instagram 37.4K followers screenshot"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg w-full"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                      Instagram, 37.4K followers, 2.4M monthly views
                    </p>
                  </div>
                  <div>
                    <img loading="lazy" 
                      src={import.meta.env.BASE_URL + 'youtube-screenshot.webp'} 
                      alt="YouTube 34.5K subscribers screenshot"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg w-full"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                      YouTube, 34.5K subscribers
                    </p>
                  </div>
                  <div>
                    <img loading="lazy" 
                      src={import.meta.env.BASE_URL + 'facebook-screenshot.webp'} 
                      alt="Facebook 34K followers screenshot"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg w-full"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                      Facebook, 34K+ followers
                    </p>
                  </div>
                  <div>
                    <img loading="lazy" 
                      src={import.meta.env.BASE_URL + 'tiktok-screenshot.webp'} 
                      alt="TikTok 39.7K followers screenshot"
                      className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg w-full"
                    />
                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                      TikTok, 39.7K followers
                    </p>
                  </div>
                  <div>
                    <div className="relative">
                      <img loading="lazy" 
                        src={import.meta.env.BASE_URL + 'snapchat-screenshot.webp'} 
                        alt="Snapchat 168.7K followers screenshot"
                        className="rounded-xl border-2 border-green-500 dark:border-green-400 shadow-lg w-full"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                        LIVE
                      </span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 text-center mt-2 font-medium">
                      Snapchat, 168.7K followers ✓ Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      ✓
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            The Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
            From 1K members to platform captain.
          </p>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900 transform -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-purple-600 rounded-full border-4 border-white dark:border-gray-950 transform -translate-x-1/2 z-10 flex items-center justify-center text-lg">
                    {milestone.icon}
                  </div>

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{milestone.date}</span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Domininate Social Media?
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto mb-4">
              Whether you need content creation, platform strategy, or someone who's been in the trenches, 
              I know what works because I've done it at scale.
            </p>
            <a 
              href="https://linkedin.com/in/mjmorrisonusa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-colors"
            >
              💼 Connect with me on LinkedIn for B2B opportunities
            </a>
          </div>
          <ContactFormMini service="Social Media Marketing" />
        </div>
      </section>
    </div>
  );
}
