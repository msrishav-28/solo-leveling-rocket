<div align="center"># React



# ⚔️ Solo Leveling Habit TrackerA modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.



<p align="center">## 🚀 Features

  <strong>Transform Your Daily Habits Into An Epic RPG Adventure</strong>

</p>- **React 18** - React version with improved rendering and concurrent features

- **Vite** - Lightning-fast build tool and development server

<p align="center">- **Redux Toolkit** - State management with simplified Redux setup

  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />- **TailwindCSS** - Utility-first CSS framework with extensive customization

  <img src="https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />- **React Router v6** - Declarative routing for React applications

  <img src="https://img.shields.io/badge/TailwindCSS-3.4.6-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization

  <img src="https://img.shields.io/badge/Redux_Toolkit-2.6.1-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />- **Form Management** - React Hook Form for efficient form handling

  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />- **Animation** - Framer Motion for smooth UI animations

</p>- **Testing** - Jest and React Testing Library setup



<p align="center">## 📋 Prerequisites

  <a href="#-about">About</a> •

  <a href="#-features">Features</a> •- Node.js (v14.x or higher)

  <a href="#-tech-stack">Tech Stack</a> •- npm or yarn

  <a href="#-installation">Installation</a> •

  <a href="#-usage">Usage</a> •## 🛠️ Installation

  <a href="#-project-structure">Structure</a> •

  <a href="#-roadmap">Roadmap</a>1. Install dependencies:

</p>   ```bash

   npm install

</div>   # or

   yarn install

---   ```

   

## 📖 About2. Start the development server:

   ```bash

**Solo Leveling Habit Tracker** is a gamified productivity application inspired by the popular manga/manhwa *Solo Leveling*. Turn your daily tasks into epic quests, earn XP as you complete them, level up your attributes, and rise through the ranks from F to S-Rank Hunter.   npm start

   # or

### 🎯 Concept   yarn start

   ```

Just like Sung Jin-Woo was chosen by The System to become the strongest, you are selected to transform your life through habit formation. Complete quests (daily habits), earn experience points, boost your attributes (Strength, Intelligence, Constitution, Dexterity, Charisma, Luck), and compete with other hunters on the global leaderboard.

## 📁 Project Structure

---

```

## ✨ Featuresreact_app/

├── public/             # Static assets

### 🗡️ Core Gameplay├── src/

- **Quest System** - Create Daily, Recurring, or One-Time quests with customizable attributes│   ├── components/     # Reusable UI components

- **XP & Leveling** - Earn experience points and level up by completing quests│   ├── pages/          # Page components

- **Attribute Growth** - Six core attributes that improve as you complete related quests│   ├── styles/         # Global styles and Tailwind configuration

- **Rank Progression** - Advance from F-Rank to S-Rank based on total XP and achievements│   ├── App.jsx         # Main application component

- **Streak Tracking** - Build and maintain daily streaks with streak bonuses│   ├── Routes.jsx      # Application routes

- **Leaderboard** - Compete with hunters worldwide and climb the rankings│   └── index.jsx       # Application entry point

├── .env                # Environment variables

### 🎨 User Experience├── index.html          # HTML template

- **Dark Cyberpunk Theme** - Neon cyan/purple aesthetic with glowing effects├── package.json        # Project dependencies and scripts

- **Smooth Animations** - Framer Motion powered transitions and micro-interactions├── tailwind.config.js  # Tailwind CSS configuration

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop└── vite.config.js      # Vite configuration

- **Real-time Updates** - Live quest completion, XP gains, and level-up celebrations```

- **Tutorial System** - Interactive onboarding for new hunters

## 🧩 Adding Routes

### 📊 Tracking & Analytics

- **Dashboard** - Comprehensive overview of active quests and statsTo add new routes to the application, update the `Routes.jsx` file:

- **Profile Page** - Detailed statistics, achievements, and attribute progression

- **Quest Templates** - Pre-built quest templates for common habits```jsx

- **Completion History** - Track your quest completion patterns over timeimport { useRoutes } from "react-router-dom";

import HomePage from "pages/HomePage";

### 🔔 Notifications (Phase 2)import AboutPage from "pages/AboutPage";

- Quest reminders at scheduled times

- Streak warning notificationsconst ProjectRoutes = () => {

- Rank-up celebration alerts  let element = useRoutes([

- Weekly progress digest emails    { path: "/", element: <HomePage /> },

    { path: "/about", element: <AboutPage /> },

---    // Add more routes as needed

  ]);

## 🛠️ Tech Stack

  return element;

### Frontend Framework};

- **React 18.2** - Modern React with concurrent features and hooks```

- **Vite 5.0** - Lightning-fast build tool and HMR dev server

- **React Router 6** - Declarative client-side routing## 🎨 Styling



### State ManagementThis project uses Tailwind CSS for styling. The configuration includes:

- **Redux Toolkit 2.6** - Simplified Redux with RTK Query for API calls

- **React Hook Form 7.55** - Performant form validation and handling- Forms plugin for form styling

- Typography plugin for text styling

### Styling & UI- Aspect ratio plugin for responsive elements

- **Tailwind CSS 3.4** - Utility-first CSS framework- Container queries for component-specific responsive design

- **Framer Motion 10.16** - Production-ready animation library- Fluid typography for responsive text

- **Lucide React** - Beautiful, consistent icon library- Animation utilities

- **Custom Design System** - Solo Leveling themed components

## 📱 Responsive Design

### Data Visualization

- **D3.js 7.9** - Powerful data visualization for attribute ringsThe app is built with responsive design using Tailwind CSS breakpoints.

- **Recharts 2.15** - Composable charting library for progress tracking



### Developer Experience## 📦 Deployment

- **TypeScript Support** - Type-safe development with JSDoc

- **ESLint** - Code quality and consistencyBuild the application for production:

- **Prettier** - Automatic code formatting

- **Git Hooks** - Pre-commit validation```bash

npm run build

---```



## 📋 Prerequisites## 🙏 Acknowledgments



Before you begin, ensure you have the following installed:- Built with [Rocket.new](https://rocket.new)

- Powered by React and Vite

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)- Styled with Tailwind CSS

- **npm** (v8.x or higher) or **yarn** (v1.22.x or higher)

- **Git** - [Download](https://git-scm.com/)Built with ❤️ on Rocket.new


---

## 🚀 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/msrishav-28/solo-leveling-rocket.git
cd solo-leveling-rocket
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Environment Setup

Create a `.env` file in the root directory:

```env
# App Configuration
VITE_APP_NAME=Solo Leveling Habit Tracker
VITE_APP_VERSION=1.0.0

# API Configuration (Phase 2)
# VITE_API_URL=http://localhost:3001
# VITE_API_KEY=your-api-key-here

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_NOTIFICATIONS=false
```

### 4️⃣ Start Development Server

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:5173`

---

## 💻 Usage

### Development Mode

```bash
npm start          # Start dev server with HMR
npm run build      # Build for production
npm run serve      # Preview production build locally
```

### Production Build

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready for deployment.

---

## 📁 Project Structure

```
solo-leveling-rocket/
├── public/                      # Static assets
│   ├── assets/
│   │   └── images/             # Image assets
│   ├── favicon.ico             # App favicon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── src/
│   ├── components/             # Reusable components
│   │   ├── ui/                 # UI components (Button, Input, Header)
│   │   ├── AppIcon.jsx         # Icon wrapper component
│   │   ├── AppImage.jsx        # Image wrapper component
│   │   ├── ErrorBoundary.jsx   # Error handling boundary
│   │   └── ScrollToTop.jsx     # Scroll restoration
│   ├── pages/                  # Page components
│   │   ├── dashboard/          # Dashboard page + components
│   │   ├── landing-page/       # Landing page + components
│   │   ├── leaderboard/        # Leaderboard page + components
│   │   ├── profile/            # Profile page + components
│   │   ├── settings/           # Settings page + components
│   │   ├── registration/       # Registration modal + components
│   │   ├── hunter-name-selection/  # Hunter name selection
│   │   ├── onboarding/         # Tutorial flow
│   │   ├── quest-creation-modal/   # Quest creation
│   │   ├── quest-completion-modal/ # Quest completion
│   │   ├── reward-screen/      # Reward celebration
│   │   └── NotFound.jsx        # 404 page
│   ├── styles/                 # Global styles
│   │   ├── index.css           # Base styles
│   │   └── tailwind.css        # Tailwind imports + custom utilities
│   ├── utils/                  # Utility functions
│   │   └── cn.js               # Class name utilities
│   ├── App.jsx                 # Root app component
│   ├── Routes.jsx              # Route definitions
│   └── index.jsx               # App entry point
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── jsconfig.json               # JavaScript config
├── package.json                # Dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # Project documentation
```

---

## 🎮 Application Flow

```
Landing Page
    ↓
Registration Modal
    ↓
Hunter Name Selection
    ↓
Onboarding Tutorial (4 steps)
    ↓
Dashboard (Main Hub)
    ├── Quest Creation Modal
    ├── Quest Completion Modal
    ├── Reward Screen
    ├── Profile Page
    ├── Settings Page
    └── Leaderboard
```

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Background | `#0a0e27` | Main background |
| Secondary Background | `#111633` | Cards & surfaces |
| Tertiary Background | `#1a1f3a` | Modals & overlays |
| Primary Accent | `#00d9ff` | Interactive elements (Cyan) |
| Secondary Accent | `#b700ff` | Secondary actions (Purple) |
| Success | `#00ff00` | Completion & success states |
| Warning | `#ffcc00` | Caution & alerts |
| Danger | `#ff0033` | Destructive actions |

### Typography

- **Headings**: Orbitron (Bold, Angular)
- **Body**: Inter (Clean, Readable)
- **Monospace**: JetBrains Mono (Stats, Sci-Fi)

### Spacing System

Built on an 8px base unit:
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

---

## 🗺️ Roadmap

### Phase 1: MVP (Current) ✅
- [x] Landing page with hero & features
- [x] User registration & authentication flow
- [x] Hunter profile creation
- [x] Interactive onboarding tutorial
- [x] Dashboard with quest management
- [x] Quest creation & completion system
- [x] XP & leveling mechanics
- [x] Attribute progression system
- [x] Rank badges (F to S)
- [x] Profile page with statistics
- [x] Settings page
- [x] Leaderboard with rankings
- [x] Responsive design (mobile, tablet, desktop)

### Phase 2: Enhanced Features 🚧
- [ ] Backend API integration
- [ ] User authentication (Firebase/Auth0)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time notifications
- [ ] Email reminders & digest
- [ ] Quest history & analytics
- [ ] Advanced statistics & charts
- [ ] Equipment system (gear slots)
- [ ] Achievement system expansion
- [ ] Social features (friend system)
- [ ] Quest sharing & templates marketplace

### Phase 3: Advanced Gamification 🎯
- [ ] Guild/Team system
- [ ] Competitive challenges
- [ ] Seasonal events
- [ ] Cosmetic customization
- [ ] Mobile app (React Native)
- [ ] Offline mode & sync
- [ ] Advanced AI quest suggestions
- [ ] Integration with fitness trackers
- [ ] Voice commands
- [ ] Augmented Reality features

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design works on all breakpoints

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue:

1. Go to [Issues](https://github.com/msrishav-28/solo-leveling-rocket/issues)
2. Click "New Issue"
3. Choose the appropriate template
4. Provide detailed information

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**M S Rishav Subhin**

- GitHub: [@msrishav-28](https://github.com/msrishav-28)
- Email: [msrishavsubhin@gmail.com](mailto:msrishav28@gmail.com)

---

## 🙏 Acknowledgments

- Inspired by the manga/manhwa **Solo Leveling** by Chugong
- UI design influenced by cyberpunk and neon aesthetics
- Built with modern React ecosystem and best practices
- Special thanks to the open-source community

---

## 📸 Screenshots

> Screenshots coming soon! The app features a dark cyberpunk theme with neon accents, smooth animations, and an immersive RPG experience.

---

## 🌟 Show Your Support

If you found this project helpful or interesting, please consider giving it a ⭐ on GitHub!

---

<div align="center">

**Built with 💙 by M S Rishav Subhin**

*Level up your life, one quest at a time.*

</div>
