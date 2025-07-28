import { useState, useEffect } from 'react';
import Animate from './utils/animations';
import './animations.css';
import { 
  Brain, 
  Zap, 
  Users, 
  Trophy, 
  Star, 
  Download, 
  Target, 
  Clock, 
  Award, 
  Globe, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  Crown,
  Sparkles,
  TrendingUp,
  Lightbulb,
  BarChart3,
  QrCode,
  Gift,
  ChevronDown,
  ImageIcon,
  Calendar
} from 'lucide-react';

const FEATURES = [
  {
    icon: Target,
    title: "46 Progressive Levels",
    description: "Journey from beginner to expert with carefully crafted difficulty curves that challenge and engage players at every skill level.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "AI Puzzle Generator",
    description: "Create unlimited custom puzzles with our advanced AI that understands your preferences and skill level for endless entertainment.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Multiplayer Co-op",
    description: "Join friends in real-time puzzle competitions with rooms supporting 4-10 players for collaborative problem-solving experiences.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Crown,
    title: "Escape Room Challenges",
    description: "Immerse yourself in themed escape room scenarios that combine multiple puzzle types into cohesive adventure experiences.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Unlock badges across 8 categories from Common to Legendary, tracking your progress and celebrating every milestone.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Leaderboards",
    description: "Compete worldwide with comprehensive ranking systems that track solving speed, accuracy, and overall puzzle mastery.",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Calendar,
    title: "Daily Puzzles",
    description: "Fresh challenges delivered every day with special rewards and streak bonuses to keep you engaged and motivated.",
    color: "from-orange-500 to-red-500"
  }
];

const PUZZLE_CATEGORIES = [
  {
    title: "Logic Puzzles",
    puzzles: ["Grid Logic", "Number Sequences", "Pattern Recognition", "Lateral Thinking", "Cryptograms", "Anagrams", "Monty Hall Problems"],
    icon: Brain,
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Brain Teasers",
    puzzles: ["Word Games", "Memory Challenges", "Spatial Reasoning", "Mathematical Puzzles", "Physics Problems", "Chess Puzzles", "Sudoku Variants"],
    icon: Lightbulb,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Expert Challenges",
    puzzles: ["Traveling Salesman", "Logic Circuits", "Probability Problems", "Geometry Puzzles", "Code Breaking", "Mathematical Sequences"],
    icon: Crown,
    color: "from-orange-600 to-red-600"
  }
];

const ACHIEVEMENTS = [
  { 
    name: "First Steps", 
    description: "Complete your first puzzle", 
    icon: Trophy, 
    rarity: "Common",
    color: "#4ECDC4"
  },
  { 
    name: "Logic Master", 
    description: "Solve 10 logic puzzles", 
    icon: Brain, 
    rarity: "Rare",
    color: "#00D4FF"
  },
  { 
    name: "Speed Demon", 
    description: "Solve a puzzle in under 30 seconds", 
    icon: Zap, 
    rarity: "Epic",
    color: "#FFE066"
  },
  { 
    name: "Perfect Score", 
    description: "Get 3 stars on 5 levels", 
    icon: Star, 
    rarity: "Rare",
    color: "#FFD700"
  },
  { 
    name: "No Hints Needed", 
    description: "Complete 5 puzzles without using hints", 
    icon: Target, 
    rarity: "Epic",
    color: "#FF6B6B"
  },
  { 
    name: "Marathon Runner", 
    description: "Play for 60 minutes total", 
    icon: Clock, 
    rarity: "Rare",
    color: "#9B59B6"
  },
  { 
    name: "Puzzle Completionist", 
    description: "Complete all 35 levels", 
    icon: Award, 
    rarity: "Legendary",
    color: "#FF9500"
  },
  { 
    name: "Genius Level", 
    description: "Complete all expert difficulty puzzles", 
    icon: Crown, 
    rarity: "Legendary",
    color: "#E91E63"
  }
];
const GALLERY_IMAGES = [
  { title: "Main Menu", description: "Sleek dark interface with intuitive navigation", category: "Interface", filename: "/public/mainmenu.jpg" },
  { title: "AI Puzzle Generator", description: "Create custom puzzles with AI assistance", category: "AI Features", filename: "/public/aipuzzle.jpg" },
  { title: "Co-op battle Room", description: "Real-time competition with friends worldwide", category: "Social", filename: "/public/coop.jpg" },
  { title: "Achievement Gallery", description: "Track progress and unlock exclusive rewards", category: "Progress", filename: "/public/achievement.jpg" },
  { title: "Escape Room Challenge", description: "Immersive themed puzzle experiences", category: "Gameplay", filename: "/public/escaperoom.jpg" },
  { title: "Daily Challenges", description: "Fresh puzzles delivered every day", category: "Content", filename: "/public/daily.jpg" },
  { title: "Leaderboards", description: "Global rankings and competitive play", category: "Social", filename: "/public/leaderboard.jpg" },
  { title: "Settings & Profile", description: "Customize your puzzle-solving experience", category: "Interface", filename: "/public/settings.jpg" }
];

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ScrollAnimation = ({ 
    children, 
    delay = 0, 
    type = 'fade',
    className = '' 
  }: { 
    children: React.ReactNode; 
    delay?: number;
    type?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom';
    className?: string;
  }) => (
    <Animate 
      type={type}
      delay={delay}
      className={className}
    >
      {children}
    </Animate>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <img 
                  src="/icon.png" 
                  alt="Mind Maze Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Mind Maze
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                <span>Features</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#gallery" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                <span>Gallery</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#puzzles" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                <span>Puzzles</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#achievements" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                <span>Achievements</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a href="#download" className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                <span>Download</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>

            {/* Download Button */}
            <div className="hidden md:block">
              <a href="https://expo.dev/accounts/2204abhay/projects/mindmaze/builds/e1a64260-3c13-40da-8f34-38dd283b3d1e" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 inline-block">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white transition-colors duration-300">
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-red-900/10 to-blue-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-orange-500/3 via-red-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <img 
                  src="/icon.png" 
                  alt="Mind Maze Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                Mind Maze
              </h1>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Unlock Your Mind's
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Full Potential</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-Powered Puzzles, Multiplayer Challenges & Brain Training
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://expo.dev/accounts/2204abhay/projects/mindmaze/builds/e1a64260-3c13-40da-8f34-38dd283b3d1e" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 inline-block">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                Download Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-400">46+</div>
                  <div className="text-gray-400">Puzzle Levels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400">15+</div>
                  <div className="text-gray-400">Puzzle Types</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">AI</div>
                  <div className="text-gray-400">Powered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">Daily</div>
                  <div className="text-gray-400">Challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* App Gallery */}
      <section id="gallery" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20">
                <ImageIcon className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">App Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                App
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Screenshots</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience our beautifully crafted interface and intuitive design
              </p>
            </div>
          </Animate>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {GALLERY_IMAGES.filter(img => img.title).map((img, index) => (
              <Animate key={index} type="slide-up" delay={index * 0.1} duration={0.6}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                  <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <img src={img.filename.replace('/public', '')} alt={img.title} className="w-full h-full object-contain p-2 bg-black" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-1">{img.title}</h3>
                    <p className="text-xs text-gray-400">{img.category}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Advanced Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cutting-Edge
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of puzzle gaming with AI-powered challenges
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <Animate key={index} type="slide-up" delay={index * 0.1} duration={0.6}>
                <div className="group relative p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30 h-full">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full border border-orange-500/20">
                <Brain className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold">AI Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powered by
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Advanced AI</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our sophisticated AI adapts to your skill level and creates personalized challenges
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Animate type="slide-up" delay={0.2} duration={0.6}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-orange-500/30">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Puzzle Generator</h3>
                    <p className="text-gray-400 text-sm">Generate unlimited puzzles across 15 different types, each tailored to your preferences and difficulty level.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dynamic Difficulty</h3>
                    <p className="text-gray-400 text-sm">Smart algorithms analyze your performance and adjust challenge levels in real-time for optimal learning.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-green-500/30">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Hints</h3>
                    <p className="text-gray-400 text-sm">AI-powered assistance provides contextual hints that guide without giving away solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-purple-500/30">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                    <p className="text-gray-400 text-sm">Track detailed progress and receive intelligent suggestions for areas that need improvement.</p>
                  </div>
                </div>
              </div>
            </Animate>

            <Animate type="slide-up" delay={0.4} duration={0.6}>
              <div className="relative">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-4">AI Analysis</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Logic Skills</span>
                      <span className="text-sm text-orange-400">85%</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Logic Skills</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="w-20 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-orange-400">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Pattern Recognition</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="w-18 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-blue-400">75%</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>Speed Solving</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="w-22 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-green-400">92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold">AI Recommendation</span>
                    </div>
                    <p className="text-sm text-gray-300">Try Advanced Logic Circuits to improve pattern recognition skills.</p>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Daily Puzzles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20">
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Daily Challenges</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Daily
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Challenges</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Fresh puzzles delivered every day with special rewards and streak bonuses
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Animate type="slide-up" delay={0.2} duration={0.6}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-green-500/30">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Daily Fresh Content</h3>
                    <p className="text-gray-400 text-sm">New puzzles every day across all categories, ensuring you never run out of challenges to solve.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Streak Rewards</h3>
                    <p className="text-gray-400 text-sm">Build daily solving streaks to unlock exclusive badges, bonus points, and special achievements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-purple-500/30">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Special Events</h3>
                    <p className="text-gray-400 text-sm">Participate in weekly themed challenges and monthly tournaments with unique puzzle types.</p>
                  </div>
                </div>
              </div>
            </Animate>

            <Animate type="slide-up" delay={0.4} duration={0.6}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4">Today's Challenge</h4>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Daily Challenge</span>
                      <span className="text-sm text-orange-400">Expert</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">Complete today's puzzle challenge to earn rewards</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">15 min limit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">50 points</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Current Streak</span>
                      <span className="text-orange-400 font-bold">7 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="text-blue-400 font-bold">23/31 completed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Next Reward</span>
                      <span className="text-green-400 font-bold">10-day badge</span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Puzzle Categories */}
      <section id="puzzles" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Puzzle Categories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Puzzle
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Categories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore diverse puzzle types designed to challenge different cognitive skills
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(PUZZLE_CATEGORIES) && PUZZLE_CATEGORIES.length > 0
              ? PUZZLE_CATEGORIES.map((category, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30 hover:scale-105 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-xl transition-transform duration-300 hover:scale-110`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      {category.puzzles.slice(0, 3).map((puzzle, puzzleIndex) => (
                        <div key={puzzleIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{puzzle}</span>
                        </div>
                      ))}
                      {category.puzzles.length > 3 && (
                        <div className="text-xs text-gray-500">+{category.puzzles.length - 3} more types</div>
                      )}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>

      {/* Multiplayer Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full border border-blue-500/20">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Multiplayer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Multiplayer
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Competition</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Challenge friends and compete with players worldwide
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-12">
            <Animate type="slide-up" delay={0.2} duration={0.6}>
              <div className="space-y-6">
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl transition-transform duration-300 hover:scale-110">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Co-op Mode</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Create custom game rooms with 4-10 players</li>
                    <li>• Public and private room options</li>
                    <li>• Real-time puzzle solving with friends</li>
                    <li>• Collaborative problem-solving challenges</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-yellow-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl transition-transform duration-300 hover:scale-110">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Competition Features</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Live leaderboards with real-time scoring</li>
                    <li>• Achievement sharing with friends</li>
                    <li>• Team challenges and tournaments</li>
                    <li>• Global and local ranking systems</li>
                  </ul>
                </div>
              </div>
            </Animate>

            <Animate type="slide-up" delay={0.4} duration={0.6}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4">Live Game Room</h4>
                  <div className="space-y-3">
                    {['Alex (Host)', 'Sarah', 'Marcus', 'Elena', 'You'].map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${index === 4 ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                          <span>{player}</span>
                          {index === 0 && <Crown className="w-4 h-4 text-yellow-400" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">{Math.floor(Math.random() * 100) + 50}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-orange-400">Next Puzzle in 3:42</span>
                  </div>
                  <p className="text-sm text-gray-300">Solve the Logic Grid Challenge</p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Achievement System */}
      <section id="achievements" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Achievements</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Achievement
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> System</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Unlock badges and track your progress across multiple achievement categories
              </p>
            </div>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(ACHIEVEMENTS) && ACHIEVEMENTS.length > 0 ? ACHIEVEMENTS.map((achievement, index) => (
              <div 
                key={index} 
                className="group p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:bg-gray-900/70 hover:border-gray-700 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <achievement.icon className="w-8 h-8 transition-transform duration-300 hover:scale-110" style={{ color: achievement.color }} />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    achievement.rarity === 'Common' ? 'bg-gray-700 text-gray-300' :
                    achievement.rarity === 'Rare' ? 'bg-blue-700 text-blue-200' :
                    achievement.rarity === 'Epic' ? 'bg-orange-700 text-orange-200' :
                    'bg-yellow-700 text-yellow-200'
                  }`}>
                    {achievement.rarity}
                  </span>
                </div>
                <h3 className="font-bold mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            )) : null}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black via-blue-900 to-black border-t border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact &amp; Feedback</h2>
          <p className="text-lg text-gray-400 mb-8">Email your message or bug report. We appreciate your feedback and will respond promptly!</p>
          <form
            action="https://formspree.io/f/xldlngyq"
            method="POST"
            className="space-y-6 text-left bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-800"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message (bug, feedback, or hello!)"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg shadow-lg hover:from-blue-500 hover:to-green-500 transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://updated-portfolio-abhay2204s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="hover:text-green-400 transition-colors text-2xl"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6h-2.18C16.4 4.84 15.3 4 14 4h-4c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 0h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zm7 12H5V8h14v10z"/></svg></a>
            <a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors text-2xl"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.72 0-.93.784-1.72 1.75-1.72s1.75.79 1.75 1.72c0 .93-.784 1.72-1.75 1.72zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.56 1.98 3.56 4.56v5.64zm-11.5 0h-.03v10h3v-10h-2.97z"/></svg></a>
            <a href="mailto:abhaymallick.dev@gmail.com" aria-label="Gmail" className="hover:text-red-400 transition-colors text-2xl"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01zm-8.67 9.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01zm-8.67 9.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01z"/></svg></a>
            <a href="https://github.com/Abhay2204" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors text-2xl"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.532 2.341 1.09 2.91.834.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Animate type="fade" duration={0.8}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20">
                <Smartphone className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Download App</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Download
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Mind Maze</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start your puzzle-solving journey today
              </p>
            </div>
          </Animate>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Animate type="slide-up" delay={0.2} duration={0.6}>
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <div className="inline-flex p-4 bg-gray-900 rounded-xl mb-6">
                    <a href="https://expo.dev/accounts/2204abhay/projects/mindmaze/builds/e1a64260-3c13-40da-8f34-38dd283b3d1e" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                      <img 
                        src="/qr-code.png" 
                        alt="Mind Maze Download QR Code" 
                        className="w-64 h-64 rounded-lg"
                      />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Available Now</h3>
                  <p className="text-gray-400 mb-6">Scan QR code or click the button below to download Mind Maze</p>
                </div>

                <div className="flex justify-center lg:justify-start gap-4">
                  <a href="https://expo.dev/accounts/2204abhay/projects/mindmaze/builds/e1a64260-3c13-40da-8f34-38dd283b3d1e" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5" />
                      Download Mind Maze
                    </div>
                  </a>
                  <a href="https://github.com/Abhay2204/Mindmaze" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gray-900 border border-gray-700 rounded-xl font-semibold flex items-center gap-3 text-white transition-all duration-300 hover:bg-gray-800 hover:border-blue-500 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.532 2.341 1.09 2.91.834.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                    GitHub Repo
                  </a>
                </div>
              </div>
            </Animate>

            <Animate type="slide-up" delay={0.4} duration={0.6}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 hover:bg-gray-900/70 hover:border-green-500/30">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">What's Included</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 46+ progressive puzzle levels</li>
                      <li>• AI-powered puzzle generation</li>
                      <li>• Multiplayer competitions</li>
                      <li>• Daily challenges and rewards</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl transition-transform duration-300 hover:scale-110">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Features</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Offline play capability</li>
                      <li>• Cross-device progress sync</li>
                      <li>• Ad-free experience</li>
                      <li>• Priority customer support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <img 
                  src="/icon.png" 
                  alt="Mind Maze Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold">Mind Maze</span>
            </div>
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <a href="https://github.com/Abhay2204/Mindmaze" target="_blank" rel="noopener noreferrer" className="group px-6 py-2 bg-gray-900 border border-gray-700 rounded-xl font-semibold flex items-center gap-2 text-white transition-all duration-300 hover:bg-gray-800 hover:border-blue-500 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.532 2.341 1.09 2.91.834.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                GitHub Repo
              </a>
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.72 0-.93.784-1.72 1.75-1.72s1.75.79 1.75 1.72c0 .93-.784 1.72-1.75 1.72zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.56 1.98 3.56 4.56v5.64zm-11.5 0h-.03v10h3v-10h-2.97z"/></svg></a>
              <a href="mailto:abhaymallick.dev@gmail.com" aria-label="Gmail" className="hover:text-red-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01zm-8.67 9.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01zm-8.67 9.065l-8.67-6.49v12.425c0 .56.455 1.01 1.015 1.01h15.31c.56 0 1.015-.45 1.015-1.01v-12.425l-8.67 6.49zm8.67-9.065h-15.31c-.56 0-1.015.45-1.015 1.01v.217l8.67 6.49 8.67-6.49v-.217c0-.56-.455-1.01-1.015-1.01z"/></svg></a>
              <a href="https://github.com/Abhay2204" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.031 1.532 1.031.893 1.532 2.341 1.09 2.91.834.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
              <a href="https://updated-portfolio-abhay2204s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="hover:text-green-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6h-2.18C16.4 4.84 15.3 4 14 4h-4c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 0h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zm7 12H5V8h14v10z"/></svg></a>
            </div>
            <div className="text-gray-400">
              &copy; 2025 Mind Maze. All rights reserved.
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Made with <span className="text-red-500">&#10084;&#65039;</span> by Abhay Mallick
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
