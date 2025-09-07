import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  Moon, 
  Sun,
  Download,
  Globe,
  ArrowRight,
  Search,
  X,
  ExternalLink,
  Twitter,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';

// Portfolio data
const PORTFOLIO_DATA = {
  name: "Trisha Rami",
  tagline: "Blockchain Researcher & Developer",
  greeting: "Welcome to my digital space where innovation meets technology.",
  about: "A passionate Computer Science student specializing in Artificial Intelligence, Machine Learning, and Blockchain. With hands-on experience in building decentralized applications and conducting research, I'm driven to solve complex problems and contribute to innovative technology.",
  contact: {
    email: "trisharami24@gmail.com",
    mobile: "+91-989-88911-16",
    portfolio: "trishhaaa24.github.io",
    github: "https://github.com/trishhaaa24",
    linkedin: "https://www.linkedin.com/in/trisha-rami-42834824b",
    twitter: "https://x.com/_trishhaaa_",
  },
  projects: [
    {
      title: "Carbon Offset Tracker",
      date: "March 2025",
      description: "Developed a blockchain-based carbon tracking system on the Ethereum and Sepolia testnet, featuring gas optimization smart contracts and secure transactions. Built a responsive React.js frontend integrated with Web3.js for seamless real-time blockchain interaction.",
      keyFeatures: [
        "Real-time carbon credit tracking on blockchain",
        "Gas-optimized smart contracts for cost efficiency",
        "Responsive web interface with Web3 integration",
        "Transparent offset transaction verification"
      ],
      technologies: ["Ethereum", "Solidity", "React.js", "Web3.js", "Sepolia"],
      github: "https://github.com/trishhaaa24/carbon-tracker",
      live: "#"
    },
    {
      title: "Token Faucet",
      date: "March 2025",
      description: "Designed and deployed a smart contract for controlled token distribution, ensuring users could not claim multiple times by leveraging Solidity's require() function. This project enhanced expertise in real-time smart contract deployment, testing, and seamless front-end integration with blockchain.",
      keyFeatures: [
        "Controlled token distribution system",
        "Anti-abuse mechanisms with Solidity require() functions",
        "Real-time smart contract deployment",
        "Seamless frontend-blockchain integration"
      ],
      technologies: ["Solidity", "Polygon", "Sepolia", "React.js"],
      github: "https://github.com/trishhaaa24/token-faucet",
      live: "#"
    },
    {
      title: "NFT Minting with IPFS Metadata Storage",
      date: "April 2025",
      description: "Created a decentralized application that enables users to mint NFTs with metadata securely stored on IPFS, ensuring data integrity and transparency. Developed using Solidity and OpenZeppelin for best security practices, with clear ownership and tamper-proof metadata.",
      keyFeatures: [
        "Decentralized NFT minting system",
        "IPFS integration for metadata storage",
        "Tamper-proof ownership records",
        "Data integrity and transparency"
      ],
      technologies: ["Solidity", "IPFS", "OpenZeppelin", "JavaScript"],
      github: "https://github.com/trishhaaa24/nft-minting",
      live: "#"
    },
  ],
  experience: [
    {
      role: "Blockchain Research Intern",
      organization: "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
      duration: "May 2025 - Aug 2025",
      location: "On-Site",
      researchFocus: "Worked on game-theoretic modeling of miner behavior in fee-based queueing blockchains, analyzing incentive mechanisms and transaction validation strategies.",
      keyContributions: [
        "Applied mathematical modeling and simulation to evaluate miner strategies under varying fee structures",
        "Contributed to blockchain scalability research",
        "Analyzed game-theoretic approaches for optimizing transactions with higher fees"
      ],
      outcome: "Prepared findings for potential publication, providing insights into optimizing transactions with higher fees, inclusion and fairness in decentralized networks.",
      technologies: ["Python", "Game Theory", "Blockchain", "Mathematical Modeling", "Research Analysis", "MATLAB"]
    }
  ],
  certificates: [
    {
      title: "Blockchain Development",
      issuer: "Coursera",
      date: "2024",
      image: "https://placehold.co/200x120/00ff88/000000?text=Blockchain"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University",
      date: "2023",
      image: "https://placehold.co/200x120/00ff88/000000?text=ML"
    },
    {
      title: "Solidity Smart Contracts",
      issuer: "Ethereum Foundation",
      date: "2023",
      image: "https://placehold.co/200x120/00ff88/000000?text=Solidity"
    }
  ],
  publications: [
    {
      title: "Blockchain Technology in the Energy Sector",
      type: "Book Chapter",
      status: "Yet to be published",
      authors: "Trisha Rami (Co-author)",
      description: "Co-authored a research chapter on blockchain's role in energy trading and smart grids for an upcoming IGI Global publication. The chapter explores practical applications and implementation strategies for blockchain in energy systems.",
      venue: "IGI Global Publication",
      keywords: ["Blockchain", "Energy Trading", "Smart Grids", "Sustainability"],
      link: "#",
      clickable: false
    },
    {
      title: "Blockchain and NFT Research Project",
      type: "Book Chapter",
      status: "Published",
      authors: "Trisha Rami",
      description: "Conducted comprehensive research on NFT applications in DeFi, digital ownership, and IP protection for an upcoming blockchain ecosystems book. Analyzed smart contract security, token standards like ERC-721 and ERC-1155, and cross-chain interoperability to optimize NFT integration within blockchain ecosystems.",
      venue: "Academic Research Publication",
      date: "August 2025",
      keywords: ["Blockchain", "NFT", "DeFi", "Smart Contracts", "Digital Ownership"],
      link: "https://doi.org/10.4018/979-8-3373-6481-0.ch012",
      clickable: true
    }
  ],
  blog: [
    {
      title: "The Future of Decentralized Finance: Beyond Traditional Banking",
      excerpt: "Exploring how DeFi protocols are reshaping financial systems and creating new opportunities for financial inclusion while addressing scalability challenges.",
      date: "Dec 15, 2024",
      author: "Trisha Rami",
      image: "https://placehold.co/400x200/00ff88/000000?text=DeFi",
      link: "https://medium.com/@trisharami24",
      tags: ["DeFi", "Blockchain", "Finance", "Smart Contracts"]
    },
    {
      title: "Game Theory in Blockchain: Understanding Miner Incentives",
      excerpt: "Deep dive into the mathematical models that govern miner behavior in fee-based blockchain systems and their impact on network security.",
      date: "Nov 28, 2024",
      author: "Trisha Rami",
      image: "https://placehold.co/400x200/00ff88/000000?text=Game+Theory",
      link: "https://medium.com/@trisharami24",
      tags: ["Game Theory", "Blockchain", "Mining", "Economics"]
    },
    {
      title: "Smart Contract Security: Lessons from Real-World Exploits",
      excerpt: "Analyzing common vulnerabilities in smart contracts and discussing best practices for secure development in the blockchain ecosystem.",
      date: "Oct 22, 2024",
      author: "Trisha Rami",
      image: "https://placehold.co/400x200/00ff88/000000?text=Security",
      link: "https://medium.com/@trisharami24",
      tags: ["Smart Contracts", "Security", "Solidity", "Best Practices"],
      featured: true
    }
  ]
};

// Search functionality
const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
        setHighlightedText(query);
      } else {
        console.error('Search failed:', response.statusText);
        // Fallback to local search
        const searchableContent = [
          ...PORTFOLIO_DATA.projects.map(p => ({ ...p, type: 'project' })),
          ...PORTFOLIO_DATA.experience.map(e => ({ ...e, type: 'experience' })),
          ...PORTFOLIO_DATA.blog.map(b => ({ ...b, type: 'blog' })),
          ...PORTFOLIO_DATA.publications.map(p => ({ ...p, type: 'publication' }))
        ];
        
        const results = searchableContent.filter(item => 
          Object.values(item).some(value => 
            typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
          )
        );
        setSearchResults(results);
      }
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to local search
      const searchableContent = [
        ...PORTFOLIO_DATA.projects.map(p => ({ ...p, type: 'project' })),
        ...PORTFOLIO_DATA.experience.map(e => ({ ...e, type: 'experience' })),
        ...PORTFOLIO_DATA.blog.map(b => ({ ...b, type: 'blog' })),
        ...PORTFOLIO_DATA.publications.map(p => ({ ...p, type: 'publication' }))
      ];
      
      const results = searchableContent.filter(item => 
        Object.values(item).some(value => 
          typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSearchResults(results);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    highlightedText,
    isLoading
  };
};


// Theme context
const ThemeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

// Search Modal Component
const SearchModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  highlightedText: string;
  isLoading: boolean;
  onNavigateToSection?: (sectionId: string) => void;
}> = ({ isOpen, onClose, searchQuery, setSearchQuery, searchResults, highlightedText, isLoading, onNavigateToSection }) => {
  const { isDark } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-300 text-black px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`relative w-full max-w-2xl mx-4 rounded-2xl shadow-2xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="flex items-center p-4 border-b border-gray-700">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, experience, blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent outline-none ${
                  isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={onClose}
                className="ml-3 p-1 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className={`p-8 text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="p-4 space-y-3">
                  {searchResults.map((result, index) => {
                    const getSectionId = (type: string) => {
                      switch (type) {
                        case 'project': return 'projects';
                        case 'experience': return 'experience';
                        case 'blog': return 'blog';
                        case 'publication': return 'publications';
                        default: return 'home';
                      }
                    };

                    const handleResultClick = () => {
                      if (onNavigateToSection) {
                        const sectionId = getSectionId(result.type);
                        onNavigateToSection(sectionId);
                        onClose();
                      }
                    };

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={handleResultClick}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className={`font-semibold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {highlightText(result.title, highlightedText)}
                            </h3>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {highlightText(result.description || result.excerpt || result.role, highlightedText)}
                            </p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {result.type}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : searchQuery ? (
                <div className={`p-8 text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  No results found for "{searchQuery}"
                </div>
              ) : (
                <div className={`p-8 text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Start typing to search...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Resume Modal Component
const ResumeModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Resume - Trisha Rami
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="max-h-[70vh] overflow-y-auto">
                <div className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}>
                  {/* Resume Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center border-b pb-4">
                      <h1 className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Trisha Rami
                      </h1>
                      <p className={`text-lg ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Blockchain Researcher & Developer
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-sm">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          📧 trisharami24@gmail.com
                        </span>
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          📱 +91-989-88911-16
                        </span>
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          🌐 trishhaaa24.github.io
                        </span>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        EDUCATION
                      </h2>
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-white'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className={`font-semibold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              UIT, Karnavati University
                            </h3>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Bachelor of Science (Hons.) - Computer Science
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              Specialization: Artificial Intelligence and Machine Learning
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              GPA: 8.44 | Ahmedabad, India | August 2022 - April 2026
                            </p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Relevant Courses:</strong> Operating Systems, Data Structures and Algorithms, 
                            Artificial Intelligence, Machine Learning, Neural Networking, Databases, LLM, 
                            Cryptography, Blockchain, Augmented Reality
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        EXPERIENCE
                      </h2>
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-white'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className={`font-semibold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            Blockchain Research Intern
                          </h3>
                          <span className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            May 2025 - Aug 2025
                          </span>
                        </div>
                        <p className={`text-sm mb-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <strong>Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)</strong> | On-Site
                        </p>
                        <div className="space-y-2">
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Research Focus:</strong> Game-theoretic modeling of miner behavior in fee-based queueing blockchains, 
                            analyzing incentive mechanisms and transaction validation strategies.
                          </p>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Technical Contribution:</strong> Applied mathematical modeling and simulation to evaluate miner 
                            strategies under varying fee structures, contributing to blockchain scalability research.
                          </p>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Outcome:</strong> Prepared findings for potential publication, providing insights into optimizing 
                            transactions with higher fees, inclusion, and fairness in decentralized networks.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        SKILLS SUMMARY
                      </h2>
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-white'
                      }`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className={`text-sm font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Languages:
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Python, JavaScript, Rust, MySQL, HTML/CSS, R, MATLAB, Solidity, React
                            </p>
                          </div>
                          <div>
                            <p className={`text-sm font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Frameworks:
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Scikit, NLTK, Keras, TensorFlow, NodeJS, Web.js, Ethers.js, React.js, Typescript, OpenZeppelin
                            </p>
                          </div>
                          <div>
                            <p className={`text-sm font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Tools:
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Hardhat, IPFS Storage, Remix IDE, MetaMask, GIT, MongoDB, MySQL, Chainlink
                            </p>
                          </div>
                          <div>
                            <p className={`text-sm font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Platforms:
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Remix IDE, Web, Windows, Arduino, AWS, Ethereum, IPFS
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        PROJECTS
                      </h2>
                      <div className="space-y-4">
                        {PORTFOLIO_DATA.projects.map((project, index) => (
                          <div key={index} className={`p-4 rounded-lg ${
                            isDark ? 'bg-gray-700/50' : 'bg-white'
                          }`}>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className={`font-semibold ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>
                                {project.title}
                              </h3>
                              <span className={`text-sm ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {project.date}
                              </span>
                            </div>
                            <p className={`text-sm mb-2 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className={`px-2 py-1 rounded-full text-xs ${
                                  isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                                }`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Publications */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        PUBLICATIONS
                      </h2>
                      <div className="space-y-4">
                        {PORTFOLIO_DATA.publications.map((pub, index) => (
                          <div key={index} className={`p-4 rounded-lg ${
                            isDark ? 'bg-gray-700/50' : 'bg-white'
                          }`}>
                            <h3 className={`font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {pub.title}
                            </h3>
                            <p className={`text-sm mb-2 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {pub.description}
                            </p>
                            <p className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              {pub.venue} | {pub.date || 'TBD'}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Honors and Awards */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        HONORS AND AWARDS
                      </h2>
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-white'
                      }`}>
                        <ul className="space-y-2">
                          <li className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            • Runner's Up at Inter College Pitchathon (Team Lead) - March 2025
                          </li>
                          <li className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            • Participant at The Gated NFTS University Regional Hackathon - May 2025
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Volunteer Experience */}
                    <div>
                      <h2 className={`text-xl font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        VOLUNTEER EXPERIENCE
                      </h2>
                      <div className="space-y-4">
                        <div className={`p-4 rounded-lg ${
                          isDark ? 'bg-gray-700/50' : 'bg-white'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-semibold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Community Executive
                            </h3>
                            <span className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              April 2024 - January 2025
                            </span>
                          </div>
                          <p className={`text-sm mb-1 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Turning Point Institute of Student Community</strong> | Ahmedabad, India
                          </p>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Conducted technical & soft-skills public speaking training for over 1500 students.
                          </p>
                        </div>
                        <div className={`p-4 rounded-lg ${
                          isDark ? 'bg-gray-700/50' : 'bg-white'
                        }`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-semibold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              Social Ambassador
                            </h3>
                            <span className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              June 2024 - July 2024
                            </span>
                          </div>
                          <p className={`text-sm mb-1 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <strong>Pledge A Smile Foundation (NGO)</strong> | Ahmedabad, India
                          </p>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            Led tech awareness workshops and crowdfunding campaigns, engaging 52,000+ followers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Contact Modal Component
const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { isDark } = useTheme();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });
      
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setContactForm({ name: '', email: '', message: '' });
        onClose();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Thank you for your message! I will get back to you soon.');
      setContactForm({ name: '', email: '', message: '' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`relative w-full max-w-2xl rounded-2xl shadow-2xl ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Get In Touch
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-green-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-green-500'
                    }`}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500' 
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-green-500'
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isDark 
                      ? 'bg-green-600 text-black hover:bg-green-700' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main App component
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery, searchResults, isSearchOpen, setIsSearchOpen, highlightedText, isLoading } = useSearch();


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className={`min-h-screen font-inter transition-all duration-300 ${
      isDark 
        ? 'bg-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800'
    }`}>
      {/* Particle Background - Only on home page */}
      {activeSection === 'home' && <ParticleBackground isDark={isDark} />}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        highlightedText={highlightedText}
        isLoading={isLoading}
        onNavigateToSection={scrollToSection}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300 ${
        isDark 
          ? 'bg-black/90 border-gray-800' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <h1 className={`text-xl font-bold flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {PORTFOLIO_DATA.name}
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'experience', label: 'Experience' },
                { id: 'blog', label: 'Blogs' },
                { id: 'projects', label: 'Projects' },
                { id: 'publications', label: 'Publications' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? isDark 
                        ? 'bg-green-600 text-black' 
                        : 'bg-green-500 text-white'
                      : isDark
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark ? 'bg-gray-800 text-green-400' : 'bg-gray-100 text-green-600'
                }`}
                title="Search (Ctrl+F)"
              >
                <Search size={20} />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              {/* Resume Button */}
              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-black hover:from-green-700 hover:to-blue-700' 
                    : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                }`}
              >
                <Download size={20} />
                Resume
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <h1 className={`text-6xl md:text-8xl font-black mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Blockchain
                </span>
                <br />
                Researcher & Developer
              </h1>
              
              {/* Greeting */}
              <p className={`text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {PORTFOLIO_DATA.greeting}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center items-center mb-12">
                <motion.button
                  onClick={() => setIsContactModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg flex items-center gap-2 hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                >
                  Talk to us
                  <ArrowRight size={20} />
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                {[
                  { icon: <Mail size={28} />, href: `mailto:${PORTFOLIO_DATA.contact.email}` },
                  { icon: <Github size={28} />, href: PORTFOLIO_DATA.contact.github },
                  { icon: <Linkedin size={28} />, href: PORTFOLIO_DATA.contact.linkedin },
                  { icon: <Twitter size={28} />, href: PORTFOLIO_DATA.contact.twitter },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold mb-12 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Experience
              </h2>
              <div className="space-y-8">
                {PORTFOLIO_DATA.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-green-500/20 group ${
                      isDark 
                        ? 'bg-gray-800/50 backdrop-blur-md' 
                        : 'bg-white/80 backdrop-blur-md'
                    }`}
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%), rgba(31, 41, 55, 0.5)' 
                        : 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%), rgba(255, 255, 255, 0.8)',
                      backgroundClip: 'padding-box'
                    }}
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                         style={{ padding: '2px' }}>
                      <div className={`w-full h-full rounded-2xl ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      }`}></div>
                    </div>
                    {exp.researchFocus ? (
                      // Detailed experience card for research intern
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold mb-2 ${
                              isDark ? 'text-white' : 'text-gray-800'
                            }`}>
                              {exp.role}
                            </h3>
                            <p className={`text-lg ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {exp.organization}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-1">
                              <Globe size={16} className="text-gray-400" />
                              <span className={`text-sm ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {exp.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={16} className="text-gray-400" />
                              <span className={`text-sm ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className={`text-lg font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}>
                            Research Focus:
                          </h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {exp.researchFocus}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h4 className={`text-lg font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}>
                            Key Contributions:
                          </h4>
                          <ul className="space-y-1">
                            {exp.keyContributions.map((contribution, idx) => (
                              <li key={idx} className={`text-sm flex items-start gap-2 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                <span className="text-green-500 mt-1">→</span>
                                {contribution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className={`text-lg font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}>
                            Outcome:
                          </h4>
                          <p className={`text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {exp.outcome}
                          </p>
                        </div>

                        <div>
                          <h4 className={`text-lg font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}>
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-xs ${
                                  isDark 
                                    ? 'bg-gray-700 text-gray-300' 
                                    : 'bg-gray-200 text-gray-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Simple experience card for other roles
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          isDark ? 'bg-gradient-to-r from-green-600 to-blue-600' : 'bg-gradient-to-r from-green-500 to-blue-500'
                        } text-white text-xl font-bold flex-shrink-0`}>
                          {exp.organization.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-1 ${
                            isDark ? 'text-white' : 'text-gray-800'
                          }`}>
                            {exp.role}
                          </h3>
                          <p className={`text-lg mb-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {exp.organization}
                          </p>
                          <p className={`text-sm mb-3 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {exp.duration}
                          </p>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {exp.researchFocus}
                        </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Blogs
              </h2>
              <p className={`text-lg mb-12 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Sharing insights and thoughts on blockchain technology, AI, and the future of decentralized systems.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {PORTFOLIO_DATA.blog.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-green-500/20 group ${
                      isDark 
                        ? 'bg-gray-800/50 backdrop-blur-md' 
                        : 'bg-white/80 backdrop-blur-md'
                    }`}
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                         style={{ padding: '2px' }}>
                      <div className={`w-full h-full rounded-2xl ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      }`}></div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-xs text-white">TR</span>
                      </div>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {post.author}
                      </span>
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        •
                      </span>
                      <div className="flex items-center gap-1">
                        <Phone size={12} className="text-gray-400" />
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {post.date}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm transition-all duration-200 ${
                        isDark 
                          ? 'text-green-400 hover:text-green-300' 
                          : 'text-green-600 hover:text-green-700'
                      }`}
                    >
                      Click here to know more
                      <ExternalLink size={14} />
                    </a>
                  </motion.div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className={`p-8 rounded-2xl text-center ${
                isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
              }`}>
                <p className={`text-lg mb-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Want to read more of my thoughts on blockchain and AI?
                </p>
                <a
                  href="https://medium.com/@trisharami24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isDark 
                      ? 'bg-green-500 text-black hover:bg-green-600' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  Visit my Medium profile
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Projects
              </h2>
              <p className={`text-lg mb-12 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A collection of my technical projects showcasing blockchain development, smart contracts, and decentralized applications.
              </p>
              <div className="space-y-8">
                {/* First two projects in a row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {PORTFOLIO_DATA.projects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-green-500/20 group ${
                        isDark 
                          ? 'bg-gray-800/50 backdrop-blur-md' 
                          : 'bg-white/80 backdrop-blur-md'
                      }`}
                    >
                      {/* Gradient border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                           style={{ padding: '2px' }}>
                        <div className={`w-full h-full rounded-2xl ${
                          isDark ? 'bg-gray-800/50' : 'bg-white/80'
                        }`}></div>
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Phone size={14} className="text-gray-400" />
                          <span className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {project.date}
                          </span>
                        </div>
                      </div>
                      
                      <p className={`text-sm mb-4 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.keyFeatures.map((feature, idx) => (
                            <li key={idx} className={`text-sm flex items-start gap-2 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              <span className="text-green-500 mt-1">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-1 rounded-full text-xs ${
                                isDark 
                                  ? 'bg-gray-700 text-gray-300' 
                                  : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                          isDark 
                            ? 'bg-green-600 text-black hover:bg-green-700' 
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        <Code size={16} />
                        View Code
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                {/* Third project spanning full width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-green-500/20 group ${
                    isDark 
                      ? 'bg-gray-800/50 backdrop-blur-md' 
                      : 'bg-white/80 backdrop-blur-md'
                  }`}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                       style={{ padding: '2px' }}>
                    <div className={`w-full h-full rounded-2xl ${
                      isDark ? 'bg-gray-800/50' : 'bg-white/80'
                    }`}></div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {PORTFOLIO_DATA.projects[2].title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Phone size={14} className="text-gray-400" />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {PORTFOLIO_DATA.projects[2].date}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {PORTFOLIO_DATA.projects[2].description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {PORTFOLIO_DATA.projects[2].keyFeatures.map((feature, idx) => (
                        <li key={idx} className={`text-sm flex items-start gap-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className="text-green-500 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {PORTFOLIO_DATA.projects[2].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={PORTFOLIO_DATA.projects[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isDark 
                        ? 'bg-green-600 text-black hover:bg-green-700' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <Code size={16} />
                    View Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Publications
              </h2>
              <p className={`text-lg mb-12 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Research contributions and academic publications in blockchain technology and energy sector applications.
              </p>
              <div className="space-y-6">
                {PORTFOLIO_DATA.publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-green-500/20 group ${
                      isDark 
                        ? 'bg-gray-800/50 backdrop-blur-md' 
                        : 'bg-white/80 backdrop-blur-md'
                    }`}
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                         style={{ padding: '2px' }}>
                      <div className={`w-full h-full rounded-2xl ${
                        isDark ? 'bg-gray-800/50' : 'bg-white/80'
                      }`}></div>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gray-600 flex items-center justify-center">
                          <span className="text-xs text-white">📖</span>
                        </div>
                        <span className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {pub.type}
                        </span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        pub.status === 'Published' 
                          ? 'bg-green-900 text-green-300' 
                          : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {pub.status}
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {pub.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Authors: {pub.authors}
                    </p>
                    
                    <p className={`text-sm mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {pub.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gray-400" />
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {pub.date || 'Yet to be published'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-gray-400" />
                        <span className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          Venue: {pub.venue}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className={`text-sm font-semibold ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>
                        Keywords:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {pub.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded-full text-xs ${
                              isDark 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {pub.clickable ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                          isDark 
                            ? 'bg-green-500 text-black hover:bg-green-600' 
                            : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                      >
                        <Download size={16} />
                        Read Publication
                      </a>
                    ) : (
                      <button
                        disabled
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                          isDark 
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <Phone size={16} />
                        Coming Soon
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Note section */}
              <div className={`mt-8 p-4 rounded-lg ${
                isDark ? 'bg-gray-800/30' : 'bg-gray-100/50'
              }`}>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className="font-semibold">Note:</span> These publications represent my research contributions in blockchain technology, focusing on practical applications in energy trading and decentralized systems. More publications are in progress.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Let's Connect Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Let's Connect
            </h2>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Interested in blockchain technology, AI, or just want to have a conversation about tech? I'd love to hear from you.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isDark 
                  ? 'bg-green-500 text-black hover:bg-green-600' 
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              <Mail size={20} />
              Send a Message
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-all duration-300 ${
        isDark 
          ? 'bg-black/50 border-gray-800 text-gray-400' 
          : 'bg-gray-50/50 border-gray-200 text-gray-600'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin size={24} />, href: PORTFOLIO_DATA.contact.linkedin, label: 'LinkedIn' },
                  { icon: <Github size={24} />, href: `https://${PORTFOLIO_DATA.contact.github}`, label: 'GitHub' },
                  { icon: <Twitter size={24} />, href: PORTFOLIO_DATA.contact.twitter, label: 'Twitter' },
                  { icon: <Mail size={24} />, href: `mailto:${PORTFOLIO_DATA.contact.email}`, label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 hover:bg-green-600 hover:text-black' 
                        : 'bg-gray-100 text-gray-600 hover:bg-green-500 hover:text-white'
                    }`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">© 2025 {PORTFOLIO_DATA.name}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Wrapped App with Theme Provider
const AppWithTheme: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;