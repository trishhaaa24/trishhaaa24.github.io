const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Portfolio data (same as frontend)
const PORTFOLIO_DATA = {
  projects: [
    {
      title: "Carbon Offset Tracker",
      tech: "Ethereum, Sepolia, Web3.js, Solidity, React",
      description: "Developed a blockchain-based carbon tracking system on the Ethereum Sepolia testnet.",
      type: "project"
    },
    {
      title: "Token Faucet",
      tech: "Solidity, Polygon Sepolia",
      description: "Designed and deployed a smart contract for controlled token distribution.",
      type: "project"
    },
    {
      title: "NFT Minting with IPFS",
      tech: "Solidity, IPFS, OpenZeppelin, JavaScript",
      description: "A decentralized application enabling users to mint NFTs with metadata securely stored on IPFS.",
      type: "project"
    }
  ],
  experience: [
    {
      title: "R&D Intern",
      organization: "DAIICT",
      duration: "Jun 2025 - Aug 2025",
      description: "Research intern for a project titled 'Blockchain-based Queueing System.'",
      type: "experience"
    },
    {
      title: "Community Executive",
      organization: "Turning Point Institute of Student Community",
      duration: "Apr 2024 - Jan 2025",
      description: "Conducted offline technical & soft-skills public speaking training, impacting over 1500 students.",
      type: "experience"
    },
    {
      title: "Social Ambassador",
      organization: "Pledge A Smile Foundation (NGO)",
      duration: "Jun 2024 - Jul 2024",
      description: "Led tech awareness workshops and crowdfunding campaigns, engaging 52,000+ followers.",
      type: "experience"
    }
  ],
  blog: [
    {
      title: "Understanding Smart Contracts: A Beginner's Guide to Blockchain Development",
      excerpt: "Dive deep into the world of smart contracts and learn how to build your first decentralized application on the blockchain.",
      date: "March 15, 2024",
      category: "Blockchain",
      type: "blog"
    },
    {
      title: "DeFi Revolution: How Decentralized Finance is Reshaping Traditional Banking",
      excerpt: "Explore the transformative power of DeFi protocols and their impact on traditional financial systems.",
      date: "February 28, 2024",
      category: "Blockchain",
      type: "blog"
    },
    {
      title: "Blockchain Security: Best Practices for Smart Contract Auditing",
      excerpt: "Learn essential security practices and common vulnerabilities in smart contract development to build robust blockchain applications.",
      date: "January 20, 2024",
      category: "Blockchain",
      type: "blog"
    }
  ],
  publications: [
    {
      title: "Blockchain Technology in the Energy Sector",
      role: "Co-authored a research chapter on blockchain's role in energy trading and smart grids.",
      publication: "Yet to be published",
      type: "publication"
    },
    {
      title: "Blockchain and NFT Research Project",
      role: "Conducted research on NFT applications in DeFi, digital ownership, and IP protection.",
      publication: "DOI: 10.4018/979-8-3373-6481-0.ch012",
      type: "publication"
    }
  ]
};

// Visitor tracking
let visitorCount = Math.floor(Math.random() * 1000) + 500;

// Search endpoint
app.post('/api/search', (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query || query.trim().length === 0) {
      return res.json({ results: [] });
    }

    const searchQuery = query.toLowerCase().trim();
    const allContent = [
      ...PORTFOLIO_DATA.projects,
      ...PORTFOLIO_DATA.experience,
      ...PORTFOLIO_DATA.blog,
      ...PORTFOLIO_DATA.publications
    ];

    const results = allContent.filter(item => {
      const searchableText = Object.values(item)
        .filter(value => typeof value === 'string')
        .join(' ')
        .toLowerCase();
      
      return searchableText.includes(searchQuery);
    });

    // Add relevance scoring
    const scoredResults = results.map(item => {
      let score = 0;
      const searchableText = Object.values(item)
        .filter(value => typeof value === 'string')
        .join(' ')
        .toLowerCase();
      
      // Title matches get higher score
      if (item.title && item.title.toLowerCase().includes(searchQuery)) {
        score += 10;
      }
      
      // Description matches get medium score
      if (item.description && item.description.toLowerCase().includes(searchQuery)) {
        score += 5;
      }
      
      // Other field matches get lower score
      const otherMatches = searchableText.split(' ').filter(word => 
        word.includes(searchQuery)
      ).length;
      score += otherMatches;

      return { ...item, score };
    });

    // Sort by relevance score
    scoredResults.sort((a, b) => b.score - a.score);

    res.json({ 
      results: scoredResults,
      query: searchQuery,
      total: scoredResults.length
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Visitor tracking endpoint
app.get('/api/visitors', (req, res) => {
  // Simulate visitor increment
  visitorCount += Math.floor(Math.random() * 5) + 1;
  res.json({ count: visitorCount });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    
    console.log('New contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
  res.json({
    visitors: visitorCount,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔍 Search API: http://localhost:${PORT}/api/search`);
  console.log(`📈 Analytics: http://localhost:${PORT}/api/analytics`);
});

module.exports = app;
