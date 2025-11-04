import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import SearchFilters from './components/SearchFilters';
import LeaderboardTable from './components/LeaderboardTable';
import PaginationControls from './components/PaginationControls';
import LeaderboardStats from './components/LeaderboardStats';

const Leaderboard = () => {
  const navigate = useNavigate();

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRank, setSelectedRank] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all-time');
  const [sortBy, setSortBy] = useState('xp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 20;
  const currentUserId = 'user-123'; // Mock current user ID

  // Mock leaderboard data
  const mockHunters = [
  {
    id: 'user-001',
    name: 'ShadowSlayer',
    title: 'The Unstoppable',
    level: 87,
    totalXP: 2450000,
    currentStreak: 156,
    rank: 'S',
    position: 1,
    avatar: "https://images.unsplash.com/photo-1704892204675-c2d560049a8d",
    avatarAlt: 'Professional headshot of confident man with dark hair in black jacket',
    isOnline: true,
    lastActive: new Date(Date.now() - 300000) // 5 minutes ago
  },
  {
    id: 'user-002',
    name: 'CrimsonBlade',
    title: 'The Relentless',
    level: 84,
    totalXP: 2280000,
    currentStreak: 142,
    rank: 'S',
    position: 2,
    avatar: "https://images.unsplash.com/photo-1707109533624-0faecae2c3ba",
    avatarAlt: 'Professional portrait of woman with long brown hair smiling confidently',
    isOnline: true,
    lastActive: new Date(Date.now() - 600000) // 10 minutes ago
  },
  {
    id: 'user-123',
    name: 'IronWill',
    title: 'The Determined',
    level: 45,
    totalXP: 890000,
    currentStreak: 67,
    rank: 'B',
    position: 15,
    avatar: "https://images.unsplash.com/photo-1632135166133-b15627b3c533",
    avatarAlt: 'Friendly headshot of young man with short brown hair in casual shirt',
    isOnline: true,
    lastActive: new Date(Date.now() - 120000) // 2 minutes ago
  },
  {
    id: 'user-003',
    name: 'StormBreaker',
    title: 'The Lightning',
    level: 78,
    totalXP: 1950000,
    currentStreak: 98,
    rank: 'A',
    position: 3,
    avatar: "https://images.unsplash.com/photo-1524653828161-e401feac3c8a",
    avatarAlt: 'Professional photo of bearded man with intense gaze in dark clothing',
    isOnline: false,
    lastActive: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    id: 'user-004',
    name: 'MysticRose',
    title: 'The Enchanter',
    level: 72,
    totalXP: 1680000,
    currentStreak: 89,
    rank: 'A',
    position: 4,
    avatar: "https://images.unsplash.com/photo-1505499663565-1ec2a8397f5b",
    avatarAlt: 'Portrait of woman with curly hair and warm smile in professional attire',
    isOnline: true,
    lastActive: new Date(Date.now() - 900000) // 15 minutes ago
  },
  {
    id: 'user-005',
    name: 'VoidWalker',
    title: 'The Mysterious',
    level: 69,
    totalXP: 1520000,
    currentStreak: 76,
    rank: 'A',
    position: 5,
    avatar: "https://images.unsplash.com/photo-1519930035898-056952d83d72",
    avatarAlt: 'Artistic portrait of man with styled hair in modern casual wear',
    isOnline: false,
    lastActive: new Date(Date.now() - 7200000) // 2 hours ago
  },
  {
    id: 'user-006',
    name: 'PhoenixRising',
    title: 'The Reborn',
    level: 65,
    totalXP: 1380000,
    currentStreak: 112,
    rank: 'B',
    position: 6,
    avatar: "https://images.unsplash.com/photo-1717329817976-2762c73d38ff",
    avatarAlt: 'Professional headshot of woman with blonde hair in business attire',
    isOnline: true,
    lastActive: new Date(Date.now() - 1800000) // 30 minutes ago
  },
  {
    id: 'user-007',
    name: 'DragonHeart',
    title: 'The Fierce',
    level: 62,
    totalXP: 1250000,
    currentStreak: 54,
    rank: 'B',
    position: 7,
    avatar: "https://images.unsplash.com/photo-1724328486793-3ffbe395a1b6",
    avatarAlt: 'Confident portrait of man with beard in professional dark suit',
    isOnline: false,
    lastActive: new Date(Date.now() - 10800000) // 3 hours ago
  },
  {
    id: 'user-008',
    name: 'SilverArrow',
    title: 'The Precise',
    level: 58,
    totalXP: 1120000,
    currentStreak: 43,
    rank: 'B',
    position: 8,
    avatar: "https://images.unsplash.com/photo-1620122303020-87ec826cf70d",
    avatarAlt: 'Portrait of woman with dark hair in elegant professional clothing',
    isOnline: true,
    lastActive: new Date(Date.now() - 2700000) // 45 minutes ago
  },
  {
    id: 'user-009',
    name: 'ThunderStrike',
    title: 'The Electric',
    level: 55,
    totalXP: 980000,
    currentStreak: 38,
    rank: 'C',
    position: 9,
    avatar: "https://images.unsplash.com/photo-1508265245416-859d8720811e",
    avatarAlt: 'Casual portrait of young man with friendly smile in outdoor setting',
    isOnline: false,
    lastActive: new Date(Date.now() - 14400000) // 4 hours ago
  },
  {
    id: 'user-010',
    name: 'CrystalMage',
    title: 'The Brilliant',
    level: 52,
    totalXP: 850000,
    currentStreak: 29,
    rank: 'C',
    position: 10,
    avatar: "https://images.unsplash.com/photo-1726754668841-3f4868616f77",
    avatarAlt: 'Professional photo of woman with glasses and confident expression',
    isOnline: true,
    lastActive: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    id: 'user-011',
    name: 'SteelGuardian',
    title: 'The Protector',
    level: 48,
    totalXP: 720000,
    currentStreak: 61,
    rank: 'C',
    position: 11,
    avatar: "https://images.unsplash.com/photo-1623491278146-20646a93d849",
    avatarAlt: 'Portrait of athletic man with determined expression in casual wear',
    isOnline: false,
    lastActive: new Date(Date.now() - 18000000) // 5 hours ago
  },
  {
    id: 'user-012',
    name: 'NightHunter',
    title: 'The Stealthy',
    level: 46,
    totalXP: 680000,
    currentStreak: 25,
    rank: 'C',
    position: 12,
    avatar: "https://images.unsplash.com/photo-1728223474364-ae5314d57df0",
    avatarAlt: 'Artistic portrait of woman with dark hair in stylish modern outfit',
    isOnline: true,
    lastActive: new Date(Date.now() - 5400000) // 1.5 hours ago
  },
  {
    id: 'user-013',
    name: 'FlameKeeper',
    title: 'The Passionate',
    level: 44,
    totalXP: 620000,
    currentStreak: 47,
    rank: 'C',
    position: 13,
    avatar: "https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7",
    avatarAlt: 'Professional headshot of man with styled hair in contemporary clothing',
    isOnline: false,
    lastActive: new Date(Date.now() - 21600000) // 6 hours ago
  },
  {
    id: 'user-014',
    name: 'WindDancer',
    title: 'The Graceful',
    level: 42,
    totalXP: 580000,
    currentStreak: 33,
    rank: 'D',
    position: 14,
    avatar: "https://images.unsplash.com/photo-1728223474364-ae5314d57df0",
    avatarAlt: 'Elegant portrait of woman with flowing hair in professional setting',
    isOnline: true,
    lastActive: new Date(Date.now() - 7200000) // 2 hours ago
  }];


  // Mock stats
  const leaderboardStats = {
    totalHunters: 15847,
    activeToday: 3421,
    sRankHunters: 23,
    averageLevel: 34.7
  };

  // Current user data
  const currentUser = {
    id: currentUserId,
    name: 'Hunter',
    level: 45
  };

  // Filter and sort hunters
  const filteredAndSortedHunters = useMemo(() => {
    let filtered = [...mockHunters];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered?.filter((hunter) =>
      hunter?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      hunter?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    // Apply rank filter
    if (selectedRank !== 'all') {
      filtered = filtered?.filter((hunter) => hunter?.rank === selectedRank);
    }

    // Apply timeframe filter (mock implementation)
    if (selectedTimeframe !== 'all-time') {


      // In a real app, this would filter based on actual timeframe data
      // For now, we'll just use the existing data
    } // Apply sorting
    filtered?.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'level':
          aValue = a?.level;
          bValue = b?.level;
          break;
        case 'streak':
          aValue = a?.currentStreak;
          bValue = b?.currentStreak;
          break;
        case 'recent-activity':
          aValue = new Date(a.lastActive)?.getTime();
          bValue = new Date(b.lastActive)?.getTime();
          break;
        default: // 'xp'
          aValue = a?.totalXP;
          bValue = b?.totalXP;
      }

      return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
    });

    // Update positions after filtering and sorting
    return filtered?.map((hunter, index) => ({
      ...hunter,
      position: index + 1
    }));
  }, [searchTerm, selectedRank, selectedTimeframe, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedHunters?.length / itemsPerPage);
  const paginatedHunters = filteredAndSortedHunters?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRankChange = (value) => {
    setSelectedRank(value);
    setCurrentPage(1);
  };

  const handleTimeframeChange = (value) => {
    setSelectedTimeframe(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedRank('all');
    setSelectedTimeframe('all-time');
    setSortBy('xp');
    setSortOrder('desc');
    setCurrentPage(1);
  };

  const handleHunterClick = (hunter) => {
    // In a real app, this would navigate to the hunter's profile
    console.log('Navigate to hunter profile:', hunter.name);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Simulate loading when filters change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedRank, selectedTimeframe, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-background">
      <Header user={currentUser} onNavigate={navigate} />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow-primary">
              <Icon name="Trophy" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold text-text-primary text-glow">
                Global Leaderboard
              </h1>
              <p className="text-text-secondary font-medium">
                Compete with hunters worldwide and climb the ranks
              </p>
            </div>
          </div>

          {/* Stats Overview */}
          <LeaderboardStats stats={leaderboardStats} />
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          selectedRank={selectedRank}
          onRankChange={handleRankChange}
          selectedTimeframe={selectedTimeframe}
          onTimeframeChange={handleTimeframeChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          sortOrder={sortOrder}
          onSortOrderChange={handleSortOrderChange}
          onClearFilters={handleClearFilters} />


        {/* Leaderboard Table */}
        <LeaderboardTable
          hunters={paginatedHunters}
          currentUserId={currentUserId}
          onHunterClick={handleHunterClick}
          loading={loading} />


        {/* Pagination */}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredAndSortedHunters?.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange} />

      </main>
    </div>);

};

export default Leaderboard;