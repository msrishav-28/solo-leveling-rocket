import React from 'react';

const questTemplates = [
  {
    id: 'morning-workout',
    name: 'Morning Workout',
    description: 'Start your day with exercise',
    type: 'recurring',
    difficulty: 'medium',
    attributes: ['strength', 'constitution'],
    xp: 50,
  },
  {
    id: 'meditation',
    name: 'Daily Meditation',
    description: 'Practice mindfulness for 15 minutes',
    type: 'recurring',
    difficulty: 'easy',
    attributes: ['charisma', 'intelligence'],
    xp: 30,
  },
  {
    id: 'reading',
    name: 'Read for 30 Minutes',
    description: 'Expand your knowledge',
    type: 'recurring',
    difficulty: 'easy',
    attributes: ['intelligence'],
    xp: 25,
  },
  {
    id: 'coding-practice',
    name: 'Coding Practice',
    description: 'Work on programming skills',
    type: 'recurring',
    difficulty: 'hard',
    attributes: ['intelligence', 'dexterity'],
    xp: 75,
  },
  {
    id: 'healthy-meal',
    name: 'Cook Healthy Meal',
    description: 'Prepare a nutritious meal',
    type: 'recurring',
    difficulty: 'medium',
    attributes: ['constitution', 'intelligence'],
    xp: 40,
  },
  {
    id: 'study-session',
    name: '1-Hour Study Session',
    description: 'Focus on learning new material',
    type: 'recurring',
    difficulty: 'medium',
    attributes: ['intelligence'],
    xp: 50,
  },
];

const QuestTemplates = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {questTemplates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template)}
          className="p-4 rounded-lg bg-[#1a1f3a] border-2 border-[#2a2f4a] hover:border-[#00d9ff] transition-all duration-300 text-left group"
        >
          <h4 className="font-orbitron font-bold text-[#00d9ff] mb-1 group-hover:text-[#b700ff] transition-colors">
            {template.name}
          </h4>
          <p className="text-sm text-gray-400 mb-2">{template.description}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 capitalize">{template.difficulty}</span>
            <span className="text-[#00d9ff] font-jetbrains">{template.xp} XP</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default QuestTemplates;
