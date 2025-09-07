# Trisha Rami - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, Three.js, and Express.js. Features a beautiful 3D animated background, advanced search functionality, visitor tracking, and a responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme and neon green accents
- **3D Animation**: Interactive particle background with mouse-controlled movement
- **Advanced Search**: Real-time search with Ctrl+F shortcut and keyword highlighting
- **Visitor Tracking**: Backend API to track and display portfolio views
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Integrated contact form with backend validation
- **Social Integration**: Links to LinkedIn, GitHub, Twitter, and Medium
- **Professional Sections**: Experience, Projects, Blogs, Publications, and more

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Three.js for 3D animations
- Framer Motion for smooth animations
- Tailwind CSS for styling
- Lucide React for icons

### Backend
- Express.js
- CORS for cross-origin requests
- Helmet for security
- Morgan for logging

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the project root:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The backend API will be available at `http://localhost:3001`

## 🔧 API Endpoints

### Search API
- **POST** `/api/search` - Search across portfolio content
- **Body**: `{ "query": "search term" }`
- **Response**: Array of matching results with relevance scoring

### Visitor Tracking
- **GET** `/api/visitors` - Get current visitor count
- **Response**: `{ "count": 1234 }`

### Contact Form
- **POST** `/api/contact` - Submit contact form
- **Body**: `{ "name": "John Doe", "email": "john@example.com", "message": "Hello!" }`
- **Response**: Success/error message

### Analytics
- **GET** `/api/analytics` - Get portfolio analytics
- **Response**: Visitor count, uptime, and timestamp

### Health Check
- **GET** `/api/health` - Check server status
- **Response**: Server status and uptime

## 🎨 Customization

### Colors and Theme
The portfolio uses a modern dark theme with neon green accents. You can customize colors in:
- `src/App.tsx` - Main color definitions
- `tailwind.config.js` - Tailwind color configuration

### Content
Update portfolio content in `src/App.tsx` in the `PORTFOLIO_DATA` object:
- Personal information
- Projects
- Experience
- Blog posts
- Publications
- Contact information

### 3D Background
Customize the particle background in `src/components/ParticleBackground.tsx`:
- Particle count
- Colors
- Animation speed
- Mouse interaction sensitivity

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

### Backend (Railway/Heroku)
1. Ensure all dependencies are in `package.json`
2. Set environment variables:
   - `PORT` (optional, defaults to 3001)
   - `NODE_ENV=production`

3. Deploy to your hosting platform

## 📱 Features in Detail

### Search Functionality
- Press `Ctrl+F` to open search modal
- Real-time search with backend API
- Keyword highlighting in results
- Fallback to local search if API unavailable
- Loading states and error handling

### 3D Background
- Interactive particle system
- Mouse-controlled movement
- Wave animations
- Color-coded particles
- Performance optimized

### Visitor Tracking
- Backend API tracks visits
- Real-time counter display
- Fallback to random count if API unavailable

### Contact Form
- Form validation
- Backend processing
- Email format validation
- Success/error feedback

## 🔒 Security Features

- CORS enabled for cross-origin requests
- Helmet.js for security headers
- Input validation and sanitization
- Error handling and logging

## 📈 Performance

- Optimized Three.js animations
- Lazy loading of components
- Efficient search algorithms
- Responsive image loading
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Trisha Rami**
- Email: trisharami24@gmail.com
- LinkedIn: [Trisha Rami](https://www.linkedin.com/in/trisha-rami-42834824b)
- GitHub: [trishhaaa24](https://github.com/trishhaaa24)
- Twitter: [@_trishhaaa_](https://x.com/_trishhaaa_)
- Medium: [@trisharami24](https://medium.com/@trisharami24)

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- Lucide React for icons
- Express.js for backend API
