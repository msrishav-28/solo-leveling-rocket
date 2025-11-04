import React from 'react';

import Button from '../../../components/ui/Button';

const PaginationControls = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange 
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range?.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots?.push(1, '...');
    } else {
      rangeWithDots?.push(1);
    }

    rangeWithDots?.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots?.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots?.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="bg-surface border border-border rounded-lg p-4 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Results Info */}
        <div className="text-sm text-text-secondary">
          Showing <span className="font-mono font-bold text-text-primary">{startItem}</span> to{' '}
          <span className="font-mono font-bold text-text-primary">{endItem}</span> of{' '}
          <span className="font-mono font-bold text-text-primary">{totalItems}</span> hunters
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="hidden sm:flex items-center space-x-1">
            {getVisiblePages()?.map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`dots-${index}`} className="px-3 py-2 text-text-secondary">
                    ...
                  </span>
                );
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onPageChange(page)}
                  className={`
                    min-w-[40px] h-10
                    ${currentPage === page ? 'shadow-glow-primary' : ''}
                  `}
                >
                  {page}
                </Button>
              );
            })}
          </div>

          {/* Mobile Page Indicator */}
          <div className="sm:hidden flex items-center space-x-2">
            <span className="text-sm text-text-secondary">
              Page <span className="font-mono font-bold text-text-primary">{currentPage}</span> of{' '}
              <span className="font-mono font-bold text-text-primary">{totalPages}</span>
            </span>
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            iconName="ChevronRight"
            iconPosition="right"
          >
            Next
          </Button>
        </div>
      </div>
      {/* Quick Jump (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-center mt-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary">Jump to page:</span>
          <div className="flex items-center space-x-1">
            {[1, Math.ceil(totalPages * 0.25), Math.ceil(totalPages * 0.5), Math.ceil(totalPages * 0.75), totalPages]?.filter((page, index, arr) => arr?.indexOf(page) === index && page <= totalPages)?.map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'ghost'}
                  size="xs"
                  onClick={() => onPageChange(page)}
                  className="min-w-[32px]"
                >
                  {page}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;