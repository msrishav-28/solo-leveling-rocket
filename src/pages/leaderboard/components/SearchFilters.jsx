import React from 'react';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedRank, 
  onRankChange, 
  selectedTimeframe, 
  onTimeframeChange,
  sortBy,
  onSortChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters 
}) => {
  const rankOptions = [
    { value: 'all', label: 'All Ranks' },
    { value: 'F', label: 'F-Rank' },
    { value: 'E', label: 'E-Rank' },
    { value: 'D', label: 'D-Rank' },
    { value: 'C', label: 'C-Rank' },
    { value: 'B', label: 'B-Rank' },
    { value: 'A', label: 'A-Rank' },
    { value: 'S', label: 'S-Rank' }
  ];

  const timeframeOptions = [
    { value: 'all-time', label: 'All Time' },
    { value: 'monthly', label: 'This Month' },
    { value: 'weekly', label: 'This Week' },
    { value: 'daily', label: 'Today' }
  ];

  const sortOptions = [
    { value: 'xp', label: 'Total XP' },
    { value: 'level', label: 'Level' },
    { value: 'streak', label: 'Current Streak' },
    { value: 'recent-activity', label: 'Recent Activity' }
  ];

  const hasActiveFilters = searchTerm || selectedRank !== 'all' || selectedTimeframe !== 'all-time' || sortBy !== 'xp';

  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-6 shadow-elevation-2">
      {/* Search Bar */}
      <div className="mb-4">
        <Input
          type="search"
          placeholder="Search hunters by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full"
        />
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Select
          label="Rank Filter"
          options={rankOptions}
          value={selectedRank}
          onChange={onRankChange}
        />

        <Select
          label="Timeframe"
          options={timeframeOptions}
          value={selectedTimeframe}
          onChange={onTimeframeChange}
        />

        <Select
          label="Sort By"
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
        />

        <div className="flex flex-col">
          <label className="text-sm font-medium text-text-secondary mb-2">
            Sort Order
          </label>
          <div className="flex gap-2">
            <Button
              variant={sortOrder === 'desc' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onSortOrderChange('desc')}
              iconName="ArrowDown"
              iconPosition="left"
              className="flex-1"
            >
              High to Low
            </Button>
            <Button
              variant={sortOrder === 'asc' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onSortOrderChange('asc')}
              iconName="ArrowUp"
              iconPosition="left"
              className="flex-1"
            >
              Low to High
            </Button>
          </div>
        </div>
      </div>
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;