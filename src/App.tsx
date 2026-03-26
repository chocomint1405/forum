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
  Menu,
  X,
  Mail,
  Github
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LoginModal = ({ isOpen, onClose, type, onSwitch }: { isOpen: boolean, onClose: () => void, type: 'login' | 'signup', onSwitch: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-surface-container-lowest w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/10"
        >
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
          >
            <X size={20} />
          </button>

          <div className="p-10">
            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center gap-1.5 mb-4">
                <span className="font-headline italic font-bold text-3xl text-primary">NucleUS</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Forum</span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface mb-2">
                {type === 'login' ? 'Welcome Back' : 'Join the Community'}
              </h2>
              <p className="text-slate-500 text-sm">
                {type === 'login' 
                  ? 'Access your clinical discussions and insights.' 
                  : 'Connect with experts and researchers in nuclear medicine.'}
              </p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-[0.98]">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
              
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-md active:scale-[0.98]">
                <Github size={20} />
                Continue with GitHub
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-surface-container-lowest px-4 text-slate-400 font-bold tracking-widest">or</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
                <button className="w-full nuclear-glow text-white py-3.5 rounded-2xl font-bold shadow-lg active:scale-[0.98] transition-all">
                  {type === 'login' ? 'Sign In with Email' : 'Create Account'}
                </button>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                {type === 'login' ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={onSwitch}
                  className="ml-2 text-primary font-bold hover:underline"
                >
                  {type === 'login' ? 'Sign Up' : 'Log In'}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

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

const PostCard = ({ author, role, time, title, content, tags, replies, views, onReadMore, onAuthorClick }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] group hover:translate-y-[-2px] transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <img 
        alt={author} 
        onClick={() => onAuthorClick?.(author)}
        className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
        src={`https://picsum.photos/seed/${author}/100/100`}
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-2 mr-2 mb-1">
            <span 
              onClick={() => onAuthorClick?.(author)}
              className="text-xs font-bold text-on-surface cursor-pointer hover:text-primary transition-colors"
            >
              {author}
            </span>
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
          <button 
            onClick={onReadMore}
            className="text-primary font-bold flex items-center gap-1 group/btn"
          >
            Read Full Thread <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ReplyItem = ({ author, role, time, content, votes: initialVotes, onAuthorClick }: any) => {
  const [votes, setVotes] = React.useState(initialVotes || 0);
  const [userVote, setUserVote] = React.useState<number>(0); // 0: none, 1: up, -1: down

  const handleVote = (delta: number) => {
    if (userVote === delta) {
      setVotes(votes - delta);
      setUserVote(0);
    } else {
      setVotes(votes - userVote + delta);
      setUserVote(delta);
    }
  };

  return (
    <div className="flex items-start gap-4 py-6 border-b border-outline-variant/10 last:border-0 group/reply">
      <div className="flex flex-col items-center gap-1 pt-1">
        <button 
          onClick={() => handleVote(1)}
          className={`p-1 rounded hover:bg-primary/10 transition-colors ${userVote === 1 ? 'text-primary' : 'text-slate-400'}`}
        >
          <motion.div whileTap={{ y: -5 }}><ChevronRight size={18} className="-rotate-90" /></motion.div>
        </button>
        <span className={`text-xs font-bold ${userVote !== 0 ? 'text-primary' : 'text-slate-500'}`}>
          {votes}
        </span>
        <button 
          onClick={() => handleVote(-1)}
          className={`p-1 rounded hover:bg-destructive/10 transition-colors ${userVote === -1 ? 'text-destructive' : 'text-slate-400'}`}
        >
          <motion.div whileTap={{ y: 5 }}><ChevronRight size={18} className="rotate-90" /></motion.div>
        </button>
      </div>
      
      <img 
        alt={author} 
        onClick={() => onAuthorClick?.(author)}
        className="w-8 h-8 rounded-full object-cover mt-1 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
        src={`https://picsum.photos/seed/${author}/80/80`}
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span 
            onClick={() => onAuthorClick?.(author)}
            className="text-xs font-bold text-on-surface cursor-pointer hover:text-primary transition-colors"
          >
            {author}
          </span>
          <span className={`px-1.5 py-0.5 text-[8px] font-bold rounded uppercase tracking-wider border ${
            role === 'EXPERT' 
              ? 'bg-primary/10 text-primary border-primary/20' 
              : 'bg-slate-100 text-slate-600 border-slate-200'
          }`}>
            {role}
          </span>
          <span className="text-[10px] text-slate-400">• {time}</span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

const ThreadView = ({ post, onBack, onAuthorClick }: { post: any, onBack: () => void, onAuthorClick?: (name: string) => void }) => {
  const [replyText, setReplyText] = React.useState('');
  const [localReplies, setLocalReplies] = React.useState(post.mockReplies);

  const handlePostReply = () => {
    if (!replyText.trim()) return;
    
    const newReply = {
      author: "Dr. Julian Kovic",
      role: "EXPERT",
      time: "Just now",
      content: replyText,
      votes: 0
    };
    
    setLocalReplies([...localReplies, newReply]);
    setReplyText('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mb-4"
      >
        <ArrowRight size={16} className="rotate-180" /> Back to Feed
      </button>

      <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)]">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-4">
            <img 
              alt={post.author} 
              onClick={() => onAuthorClick?.(post.author)}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/5 cursor-pointer hover:opacity-80 transition-opacity" 
              src={`https://picsum.photos/seed/${post.author}/120/120`}
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  onClick={() => onAuthorClick?.(post.author)}
                  className="text-sm font-bold text-on-surface cursor-pointer hover:text-primary transition-colors"
                >
                  {post.author}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider border ${
                  post.role === 'EXPERT' 
                    ? 'bg-primary/10 text-primary border-primary/20' 
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {post.role}
                </span>
              </div>
              <span className="text-xs text-slate-400">{post.time}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
              <HelpCircle size={20} />
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 font-headline text-on-surface leading-tight tracking-tight">
          {post.title}
        </h2>
        
        <div className="text-slate-700 leading-relaxed mb-8 space-y-6 text-lg">
          <p className="font-medium text-slate-800">{post.content}</p>
          {post.fullContent && (
            <p className="text-slate-600 border-l-4 border-primary/20 pl-6 py-2 italic">
              {post.fullContent}
            </p>
          )}
          <p>This discussion highlights the critical role of interdisciplinary collaboration in modern nuclear medicine. As we integrate more advanced imaging techniques, the need for standardized protocols and continuous education becomes paramount for the safety and efficacy of patient care.</p>
        </div>

        <div className="flex items-center gap-2 mb-10">
          {post.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-1.5 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full border border-outline-variant/10">
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t border-outline-variant/15 pt-10">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <MessageSquare size={22} className="text-primary" /> 
              Discussion <span className="text-slate-400 font-normal">({localReplies.length})</span>
            </h4>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <span>Sort by:</span>
              <button className="text-primary">Newest</button>
            </div>
          </div>
          
          <div className="space-y-2 mb-12">
            {localReplies.map((reply: any, idx: number) => (
              <ReplyItem key={idx} {...reply} onAuthorClick={onAuthorClick} />
            ))}
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
            <div className="flex gap-4">
              <img 
                alt="Current User" 
                onClick={() => onAuthorClick?.("Dr. Julian Kovic")}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/10 cursor-pointer hover:opacity-80 transition-opacity" 
                src="https://picsum.photos/seed/Julian/100/100"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <textarea 
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Share your clinical insights or ask a question..."
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-5 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px] transition-all shadow-inner"
                />
                <div className="flex justify-end mt-4 gap-3">
                  <button 
                    onClick={() => setReplyText('')}
                    className="px-6 py-2 rounded-full text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handlePostReply}
                    className="nuclear-glow text-white px-8 py-2.5 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all"
                  >
                    Post Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MemberCard = ({ name, role, bio, specialty, onClick }: any) => (
  <motion.div 
    onClick={onClick}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] flex items-center gap-6 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
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
  const [view, setView] = React.useState<'feed' | 'community' | 'profile' | 'thread'>('feed');
  const [selectedUserProfile, setSelectedUserProfile] = React.useState<any>(null);
  const [selectedThread, setSelectedThread] = React.useState<any>(null);
  const [authModal, setAuthModal] = React.useState<{ isOpen: boolean, type: 'login' | 'signup' }>({ isOpen: false, type: 'login' });

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
    { 
      name: "Dr. Aris Thorne", 
      role: "EXPERT", 
      specialty: "Nuclear Oncology", 
      bio: "Leading researcher in PET/CT tracers for early-stage detection.",
      email: "a.thorne@nucleus.edu",
      joined: "March 2022",
      stats: { posts: 128, replies: 450, views: "45.2k" }
    },
    { 
      name: "Sarah Jenkins", 
      role: "USER", 
      specialty: "Radiology Resident", 
      bio: "Passionate about patient safety and radiation dose optimization.",
      email: "s.jenkins@hospital.org",
      joined: "November 2023",
      stats: { posts: 15, replies: 89, views: "3.1k" }
    },
    { 
      name: "Prof. Elena Vance", 
      role: "EXPERT", 
      specialty: "Isotope Synthesis", 
      bio: "20 years of experience in cyclotron operations and radiochemistry.",
      email: "e.vance@university.edu",
      joined: "June 2021",
      stats: { posts: 85, replies: 312, views: "28.9k" }
    },
    { 
      name: "Marcus Wright", 
      role: "USER", 
      specialty: "Medical Physicist", 
      bio: "Focusing on AI-driven radiotherapy planning and quality assurance.",
      email: "m.wright@clinic.net",
      joined: "September 2023",
      stats: { posts: 22, replies: 145, views: "5.4k" }
    },
    { 
      name: "Dr. Julian Kovic", 
      role: "EXPERT", 
      specialty: "Cardiovascular Imaging", 
      bio: "Specializing in myocardial perfusion imaging and stress testing.",
      email: "j.kovic@nucleus.edu",
      joined: "January 2024",
      stats: { posts: 42, replies: 156, views: "12.4k" }
    },
    { 
      name: "RadAI Lab", 
      role: "EXPERT", 
      specialty: "AI Research Group", 
      bio: "Collaborative research group focused on machine learning in radiology.",
      email: "contact@radai.lab",
      joined: "August 2022",
      stats: { posts: 210, replies: 12, views: "105k" }
    },
  ];

  const handleAuthorClick = (authorName: string) => {
    const member = members.find(m => m.name === authorName);
    if (member) {
      setSelectedUserProfile(member);
      setView('profile');
      setSelectedThread(null);
    }
  };

  const posts = [
    {
      id: 1,
      author: "Dr. Aris Thorne",
      role: "EXPERT",
      time: "5m ago",
      title: "How PET/CT improves cancer diagnosis",
      content: "Advancements in PET/CT imaging are revolutionizing early detection and staging, allowing for more personalized treatment pathways. Recent studies show a 15% increase in diagnostic accuracy when using new tracers...",
      fullContent: "Advancements in PET/CT imaging are revolutionizing early detection and staging, allowing for more personalized treatment pathways. Recent studies show a 15% increase in diagnostic accuracy when using new tracers. The integration of high-resolution detectors and advanced reconstruction algorithms has significantly reduced scan times while improving image quality. This is particularly crucial for pediatric patients and those with claustrophobia. Furthermore, the development of specific ligands for prostate cancer and neuroendocrine tumors has opened new horizons in precision medicine.",
      tags: ['imaging', 'oncology'],
      replies: 12,
      views: 250,
      mockReplies: [
        { author: "Marcus Wright", role: "USER", time: "2m ago", content: "Great insights! How do you see the integration of AI affecting these diagnostic accuracy rates in the next 5 years?", votes: 15 },
        { author: "Prof. Elena Vance", role: "EXPERT", time: "1m ago", content: "The tracer development is indeed the bottleneck. We are working on some novel F-18 labeled compounds that might interest you.", votes: 32 },
        { author: "Sarah Jenkins", role: "USER", time: "30s ago", content: "I've seen some of these new tracers in our clinic recently. The clarity is astounding compared to what we had just two years ago.", votes: 8 }
      ]
    },
    {
      id: 2,
      author: "Sarah Jenkins",
      role: "USER",
      time: "20m ago",
      title: "Understanding radiation dose in therapy",
      content: "A comprehensive guide for patients and junior practitioners on how we calculate and monitor radiation exposure levels during treatment cycles. Safety protocols have evolved significantly in the last decade...",
      fullContent: "A comprehensive guide for patients and junior practitioners on how we calculate and monitor radiation exposure levels during treatment cycles. Safety protocols have evolved significantly in the last decade, moving towards more individualized dosimetry. We now use sophisticated software to simulate dose distribution before the first treatment is even administered. This 'virtual treatment' allows us to identify potential hot spots and adjust the plan accordingly, ensuring maximum efficacy with minimum risk to healthy tissue.",
      tags: ['radiation', 'safety'],
      replies: 8,
      views: 180,
      mockReplies: [
        { author: "Dr. Julian Kovic", role: "EXPERT", time: "10m ago", content: "Excellent summary, Sarah. Patient education is half the battle in nuclear medicine. Understanding the ALARA principle is fundamental.", votes: 45 },
        { author: "Marcus Wright", role: "USER", time: "5m ago", content: "Could you elaborate more on the software used for these simulations? Is it mostly Monte Carlo based?", votes: 12 }
      ]
    },
    {
      id: 3,
      author: "RadAI Lab",
      role: "EXPERT",
      time: "1h ago",
      title: "Applications of AI in radiotherapy planning",
      content: "How machine learning models are assisting oncologists in defining precise target volumes while sparing healthy surrounding tissues. Our latest model achieves sub-millimeter precision in lung tumor segmentation...",
      fullContent: "How machine learning models are assisting oncologists in defining precise target volumes while sparing healthy surrounding tissues. Our latest model achieves sub-millimeter precision in lung tumor segmentation. By training on thousands of annotated CT and PET scans, the AI can now identify subtle patterns that might be missed by the human eye, especially in complex anatomical regions. This not only speeds up the planning process but also ensures a level of consistency that was previously difficult to achieve across different institutions.",
      tags: ['AI-in-medicine'],
      replies: 24,
      views: 540,
      mockReplies: [
        { author: "Dr. Aris Thorne", role: "EXPERT", time: "30m ago", content: "The sub-millimeter precision is impressive. Have you tested this on moving targets like liver lesions? Respiratory gating is usually the biggest challenge there.", votes: 28 },
        { author: "Prof. Elena Vance", role: "EXPERT", time: "15m ago", content: "We've been looking for a partner to test AI-driven isotope selection. Your segmentation model could be the perfect front-end for that.", votes: 19 }
      ]
    }
  ];

  const profileToDisplay = selectedUserProfile || currentUser;

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 clinical-glass shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)]">
        <div className="flex items-center gap-8 cursor-pointer" onClick={() => { setView('feed'); setSelectedUserProfile(null); setSelectedThread(null); }}>
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
          <button 
            onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
            className="text-on-surface-variant px-4 py-2 hover:text-primary transition-colors text-sm font-semibold"
          >
            Login
          </button>
          <button 
            onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
            className="nuclear-glow text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm active:scale-95 transition-transform"
          >
            Sign Up
          </button>
          <button className="text-on-surface-variant p-2 hover:bg-surface-container rounded-full md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <LoginModal 
        isOpen={authModal.isOpen} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
        type={authModal.type} 
        onSwitch={() => setAuthModal({ ...authModal, type: authModal.type === 'login' ? 'signup' : 'login' })}
      />

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="h-[calc(100vh-64px)] w-64 fixed left-0 top-16 pt-8 bg-surface border-r border-outline-variant/15 overflow-y-auto hidden md:block">
          <div className="px-6 mb-8">
            <h1 className="font-headline text-2xl font-bold text-primary leading-tight">
              {view === 'feed' ? 'Community Feed' : view === 'community' ? 'Our Community' : view === 'thread' ? 'Discussion' : 'My Profile'}
            </h1>
          </div>
          
          <nav className="space-y-1 pr-4">
            <SidebarItem 
              icon={UserCircle} 
              label="My Profile" 
              active={view === 'profile' && (!selectedUserProfile || selectedUserProfile.name === currentUser.name)} 
              onClick={() => { setView('profile'); setSelectedUserProfile(currentUser); setSelectedThread(null); }}
            />
            <SidebarItem 
              icon={HelpCircle} 
              label="Questions" 
              active={view === 'feed' || view === 'thread'} 
              onClick={() => { setView('feed'); setSelectedUserProfile(null); setSelectedThread(null); }}
            />
            <SidebarItem 
              icon={Users} 
              label="Community" 
              active={view === 'community'} 
              onClick={() => { setView('community'); setSelectedUserProfile(null); setSelectedThread(null); }}
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
            
            {/* Feed or Community or Profile or Thread View */}
            <div className="flex-1">
              {view === 'feed' ? (
                <>
                  {/* Create Post Area */}
                  <div className="bg-surface-container-lowest rounded-xl p-4 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)] flex items-center gap-4 mb-10">
                    <img 
                      alt="User Avatar" 
                      onClick={() => handleAuthorClick(currentUser.name)}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
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
                    {posts.map((post, idx) => (
                      <PostCard 
                        key={idx}
                        {...post}
                        onAuthorClick={handleAuthorClick}
                        onReadMore={() => {
                          setSelectedThread(post);
                          setView('thread');
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : view === 'community' ? (
                <div className="space-y-6">
                  <div className="mb-8">
                    <p className="text-slate-500 text-sm">Meet the professionals and researchers driving the future of nuclear medicine.</p>
                  </div>
                  <div className="grid gap-6">
                    {members.map((member, idx) => (
                      <MemberCard 
                        key={idx} 
                        {...member} 
                        onClick={() => {
                          setSelectedUserProfile(member);
                          setView('profile');
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : view === 'thread' ? (
                <ThreadView 
                  post={selectedThread} 
                  onAuthorClick={handleAuthorClick}
                  onBack={() => {
                    setView('feed');
                    setSelectedThread(null);
                  }} 
                />
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={profileToDisplay.name}
                  className="space-y-8"
                >
                  <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(0,101,139,0.06)]">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <img 
                        alt={profileToDisplay.name} 
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/10 shadow-lg" 
                        src={`https://picsum.photos/seed/${profileToDisplay.name}/300/300`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-on-surface font-headline">{profileToDisplay.name}</h2>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider border border-primary/20">
                            {profileToDisplay.role}
                          </span>
                        </div>
                        <p className="text-primary font-semibold mb-4">{profileToDisplay.specialty}</p>
                        <p className="text-slate-600 leading-relaxed max-w-2xl mb-6 italic">
                          "{profileToDisplay.bio}"
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-on-surface">Email:</span> {profileToDisplay.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-on-surface">Member since:</span> {profileToDisplay.joined}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Posts', value: profileToDisplay.stats.posts },
                      { label: 'Replies', value: profileToDisplay.stats.replies },
                      { label: 'Total Views', value: profileToDisplay.stats.views }
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
