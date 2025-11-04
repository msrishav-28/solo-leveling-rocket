import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings as SettingsIcon, Trophy, Target, LogOut } from 'lucide-react';
import Button from './Button';

const Header = ({ playerData }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Target },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b-2 border-[#2a2f4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d9ff] to-[#b700ff] flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-orbitron font-bold bg-gradient-to-r from-[#00d9ff] to-[#b700ff] bg-clip-text text-transparent">
              Solo Leveling
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-[#1a1f3a] text-[#00d9ff] shadow-[0_0_10px_rgba(0,217,255,0.3)]'
                      : 'text-gray-400 hover:text-[#00d9ff] hover:bg-[#1a1f3a]'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="hidden md:flex items-center space-x-4">
            {playerData && (
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg bg-[#1a1f3a] border border-[#2a2f4a]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#b700ff] flex items-center justify-center">
                  <span className="text-white font-orbitron font-bold text-sm">
                    {playerData.level}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-orbitron text-white">{playerData.name}</p>
                  <p className="text-xs text-gray-400">{playerData.rank} Rank</p>
                </div>
              </div>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#00d9ff] hover:bg-[#1a1f3a] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2a2f4a]">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 flex items-center space-x-3 ${
                      isActive
                        ? 'bg-[#1a1f3a] text-[#00d9ff] shadow-[0_0_10px_rgba(0,217,255,0.3)]'
                        : 'text-gray-400 hover:text-[#00d9ff] hover:bg-[#1a1f3a]'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className="px-4 py-3 rounded-lg font-inter font-medium text-gray-400 hover:text-[#ff0033] hover:bg-[#1a1f3a] transition-all duration-300 flex items-center space-x-3"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
