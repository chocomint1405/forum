/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  HelpCircle, 
  Users, 
  Radiation, 
  Stethoscope, 
  Eye, 
  Microscope, 
  Cpu, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight,
  UserCircle,
  Image as ImageIcon,
  Menu
} from 'lucide-react';
import { motion } from 'motion/react';

const SidebarItem = ({ icon: Icon, label, active = false, sub = false, onClick }: { icon: any, label: string, active?: boolean, sub?: boolean, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`
    cursor-pointer flex items-center gap-3 px-6 py-3 transition-all duration-200
    ${active 
      ? 'bg-white text-primary font-semibold rounded-r-full shadow-sm' 
      : 'text-slate-500 hover:bg-slate-200/50 hover:translate-x-1 rounded-r-full'}
    ${sub ? 'py-2 text-xs' : 'text-sm'}
  `}>
    <Icon size={sub ? 16 : 20} className={active ? 'text-primary' : ''} />
    <span className={sub ? 'lowercase' : ''}>{label}</span>
  </div>
);

const PostCard = ({ author, role, time, title, content, tags, replies, views }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] group hover:translate-y-[-2px] transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <img 
        alt={author} 
        className="w-10 h-10 rounded-full object-cover" 
        src={`https://picsum.photos/seed/${author}/100/100`}
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-2 mr-2 mb-1">
            <span className="text-xs font-bold text-on-surface">{author}</span>
            <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${
              role === 'EXPERT' 
                ? 'bg-primary/10 text-primary border-primary/20' 
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
              {role}
            </span>
          </div>
          <span className="text-xs text-slate-400">• {time}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight font-headline">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {content}
        </p>
        <div className="flex items-center gap-2 mb-6">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15 text-slate-500 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MessageSquare size={14} /> {replies} replies</span>
            <span className="flex items-center gap-1"><Eye size={14} /> {views} views</span>
          </div>
          <button className="text-primary font-bold flex items-center gap-1 group/btn">
            Read Full Thread <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const MemberCard = ({ name, role, bio, specialty }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] flex items-center gap-6 hover:translate-y-[-2px] transition-all duration-300"
  >
    <img 
      alt={name} 
      className="w-20 h-20 rounded-full object-cover border-2 border-primary/10" 
      src={`https://picsum.photos/seed/${name}/200/200`}
      referrerPolicy="no-referrer"
    />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="text-lg font-bold text-on-surface">{name}</h4>
        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${
          role === 'EXPERT' 
            ? 'bg-primary/10 text-primary border-primary/20' 
            : 'bg-slate-100 text-slate-600 border-slate-200'
        }`}>
          {role}
        </span>
      </div>
      <p className="text-primary text-xs font-semibold mb-2">{specialty}</p>
      <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed italic">
        "{bio}"
      </p>
    </div>
    <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors">
      <ChevronRight size={24} />
    </button>
  </motion.div>
);

export default function App() {
  const [view, setView] = React.useState<'feed' | 'community' | 'profile'>('feed');

  const currentUser = {
    name: "Dr. Julian Kovic",
    role: "EXPERT",
    specialty: "Cardiovascular Imaging",
    bio: "Specializing in myocardial perfusion imaging and stress testing. Dedicated to improving diagnostic accuracy in cardiac nuclear medicine.",
    email: "j.kovic@nucleus.edu",
    joined: "January 2024",
    stats: {
      posts: 42,
      replies: 156,
      views: "12.4k"
    }
  };

  const members = [
    { name: "Dr. Aris Thorne", role: "EXPERT", specialty: "Nuclear Oncology", bio: "Leading researcher in PET/CT tracers for early-stage detection." },
    { name: "Sarah Jenkins", role: "USER", specialty: "Radiology Resident", bio: "Passionate about patient safety and radiation dose optimization." },
    { name: "Prof. Elena Vance", role: "EXPERT", specialty: "Isotope Synthesis", bio: "20 years of experience in cyclotron operations and radiochemistry." },
    { name: "Marcus Wright", role: "USER", specialty: "Medical Physicist", bio: "Focusing on AI-driven radiotherapy planning and quality assurance." },
    { name: "Dr. Julian Kovic", role: "EXPERT", specialty: "Cardiovascular Imaging", bio: "Specializing in myocardial perfusion imaging and stress testing." },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 clinical-glass shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)]">
        <div className="flex items-center gap-8 cursor-pointer" onClick={() => setView('feed')}>
          <div className="flex items-baseline gap-1.5">
            <span className="font-headline italic font-bold text-2xl text-primary">NucleUS</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Forum</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" size={16} />
            <input 
              className="pl-10 pr-4 py-1.5 bg-surface-container-high border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-64 transition-all outline-none" 
              placeholder="Search discussions..." 
              type="text"
            />
          </div>
          <button className="text-on-surface-variant p-2 hover:bg-surface-container rounded-full lg:hidden">
            <Search size={20} />
          </button>
          <button className="text-on-surface-variant px-4 py-2 hover:text-primary transition-colors text-sm font-semibold">
            Login
          </button>
          <button className="nuclear-glow text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform">
            Sign Up
          </button>
          <button className="text-on-surface-variant p-2 hover:bg-surface-container rounded-full md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="h-[calc(100vh-64px)] w-64 fixed left-0 top-16 pt-8 bg-surface border-r border-outline-variant/15 overflow-y-auto hidden md:block">
          <div className="px-6 mb-8">
            <h1 className="font-headline text-2xl font-bold text-primary leading-tight">
              {view === 'feed' ? 'Community Feed' : view === 'community' ? 'Our Community' : 'My Profile'}
            </h1>
          </div>
          
          <nav className="space-y-1 pr-4">
            <SidebarItem 
              icon={UserCircle} 
              label="My Profile" 
              active={view === 'profile'} 
              onClick={() => setView('profile')}
            />
            <SidebarItem 
              icon={HelpCircle} 
              label="Questions" 
              active={view === 'feed'} 
              onClick={() => setView('feed')}
            />
            <SidebarItem 
              icon={Users} 
              label="Community" 
              active={view === 'community'} 
              onClick={() => setView('community')}
            />
          </nav>

          <div className="mt-8 px-6 mb-2">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Specialized Tags</p>
          </div>
          
          <nav className="space-y-1 pr-4">
            <SidebarItem icon={Radiation} label="radiation" sub />
            <SidebarItem icon={Stethoscope} label="oncology" sub />
            <SidebarItem icon={Eye} label="imaging" sub />
            <SidebarItem icon={Microscope} label="isotope" sub />
            <SidebarItem icon={Cpu} label="AI-in-Medicine" sub />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 lg:p-12">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* Feed or Community or Profile View */}
            <div className="flex-1">
              {view === 'feed' ? (
                <>
                  {/* Create Post Area */}
                  <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] flex items-center gap-4 mb-10">
                    <img 
                      alt="User Avatar" 
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
                      src={`https://picsum.photos/seed/${currentUser.name}/100/100`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 bg-surface-container-high rounded-full px-5 py-2.5 flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors">
                      <span className="text-on-surface-variant text-sm truncate mr-4">What's on your mind regarding nuclear medicine?</span>
                      <ImageIcon size={20} className="text-on-surface-variant" />
                    </div>
                  </div>

                  {/* Posts */}
                  <div className="space-y-8">
                    <PostCard 
                      author="Dr. Aris Thorne"
                      role="EXPERT"
                      time="5m ago"
                      title="How PET/CT improves cancer diagnosis"
                      content="Advancements in PET/CT imaging are revolutionizing early detection and staging, allowing for more personalized treatment pathways. Recent studies show a 15% increase in diagnostic accuracy when using new tracers..."
                      tags={['imaging', 'oncology']}
                      replies={12}
                      views={250}
                    />
                    <PostCard 
                      author="Sarah Jenkins"
                      role="USER"
                      time="20m ago"
                      title="Understanding radiation dose in therapy"
                      content="A comprehensive guide for patients and junior practitioners on how we calculate and monitor radiation exposure levels during treatment cycles. Safety protocols have evolved significantly in the last decade..."
                      tags={['radiation', 'safety']}
                      replies={8}
                      views={180}
                    />
                    <PostCard 
                      author="RadAI Lab"
                      role="EXPERT"
                      time="1h ago"
                      title="Applications of AI in radiotherapy planning"
                      content="How machine learning models are assisting oncologists in defining precise target volumes while sparing healthy surrounding tissues. Our latest model achieves sub-millimeter precision in lung tumor segmentation..."
                      tags={['AI-in-medicine']}
                      replies={24}
                      views={540}
                    />
                  </div>
                </>
              ) : view === 'community' ? (
                <div className="space-y-6">
                  <div className="mb-8">
                    <p className="text-slate-500 text-sm">Meet the professionals and researchers driving the future of nuclear medicine.</p>
                  </div>
                  <div className="grid gap-6">
                    {members.map((member, idx) => (
                      <MemberCard key={idx} {...member} />
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)]">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <img 
                        alt={currentUser.name} 
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/10 shadow-lg" 
                        src={`https://picsum.photos/seed/${currentUser.name}/300/300`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-on-surface font-headline">{currentUser.name}</h2>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider border border-primary/20">
                            {currentUser.role}
                          </span>
                        </div>
                        <p className="text-primary font-semibold mb-4">{currentUser.specialty}</p>
                        <p className="text-slate-600 leading-relaxed max-w-2xl mb-6 italic">
                          "{currentUser.bio}"
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-on-surface">Email:</span> {currentUser.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-on-surface">Member since:</span> {currentUser.joined}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Posts', value: currentUser.stats.posts },
                      { label: 'Replies', value: currentUser.stats.replies },
                      { label: 'Total Views', value: currentUser.stats.views }
                    ].map(stat => (
                      <div key={stat.label} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] text-center">
                        <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Mission Card */}
                <div className="nuclear-glow rounded-xl p-6 text-white shadow-lg overflow-hidden relative">
                  <div className="relative z-10">
                    <h3 className="font-headline text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      NucleUS is dedicated to advancing nuclear medicine awareness through academic discussion, patient education, and clinical research sharing.
                    </p>
                    <button className="mt-6 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More <ChevronRight size={14} />
                    </button>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Trending Topics Placeholder */}
                <div className="bg-surface-container-low rounded-xl p-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Trending Topics</h4>
                  <ul className="space-y-4">
                    {['New Isotope Tracers', 'Thyroid Treatment', 'Dosimetry Standards'].map(topic => (
                      <li key={topic} className="group cursor-pointer">
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">{topic}</p>
                        <p className="text-[10px] text-slate-400">45 discussions this week</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
