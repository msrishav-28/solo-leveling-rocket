import React from 'react';
import Icon from '../../../components/AppIcon.jsx';

const Equipment = () => {
  const equipmentSlots = [
    { id: 'head', label: 'Head', icon: 'User' },
    { id: 'chest', label: 'Chest', icon: 'Shield' },
    { id: 'hands', label: 'Hands', icon: 'Hand' },
    { id: 'legs', label: 'Legs', icon: 'Move' },
    { id: 'feet', label: 'Feet', icon: 'Footprints' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-bold text-primary tracking-wider">
          GEAR / EQUIPMENT
        </h2>
        <span className="text-xs px-3 py-1 bg-muted border border-border rounded-full text-text-secondary">
          Coming in Phase 2
        </span>
      </div>

      <p className="text-sm text-text-secondary mb-6">
        Equipment slots will be unlocked in the next update. Equip powerful gear to boost your attributes!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {equipmentSlots.map((slot) => (
          <div
            key={slot.id}
            className="bg-muted border border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center space-y-3 opacity-50"
          >
            <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center">
              <Icon name="Lock" size={32} className="text-text-secondary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-text-secondary">
                {slot.label}
              </p>
              <p className="text-xs text-text-secondary/70">
                Locked
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
