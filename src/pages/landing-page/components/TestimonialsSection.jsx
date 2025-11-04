import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
  {
    user: {
      name: 'Alex Chen',
      avatar: "https://images.unsplash.com/photo-1610909810013-7c52994a153e",
      avatarAlt: 'Professional headshot of Asian man with short black hair in dark blue shirt'
    },
    content: 'Solo Leveling completely transformed how I approach my daily habits. The RPG mechanics make everything so engaging that I actually look forward to my morning routine now!',
    rating: 5,
    rank: 'A'
  },
  {
    user: {
      name: 'Sarah Martinez',
      avatar: "https://images.unsplash.com/photo-1628013663808-25ef6a3b28b4",
      avatarAlt: 'Professional headshot of Hispanic woman with long brown hair in white blazer'
    },
    content: 'The attribute system is genius! Linking my workouts to Strength and my reading to Intelligence makes every habit feel meaningful. I\'ve maintained a 180-day streak!',
    rating: 5,
    rank: 'S'
  },
  {
    user: {
      name: 'Marcus Johnson',
      avatar: "https://images.unsplash.com/photo-1585066047759-3438c34cf676",
      avatarAlt: 'Professional headshot of African American man with beard in navy suit'
    },
    content: 'As someone who struggled with consistency, the quest system and leaderboards gave me the competitive edge I needed. Went from F-Rank to B-Rank in 3 months!',
    rating: 5,
    rank: 'B'
  },
  {
    user: {
      name: 'Emma Thompson',
      avatar: "https://images.unsplash.com/photo-1655915383151-e6e0460617b4",
      avatarAlt: 'Professional headshot of Caucasian woman with blonde hair in light blue shirt'
    },
    content: 'The visual progression and achievement system keep me motivated every day. It\'s like having a personal RPG where the character development happens in real life.',
    rating: 4,
    rank: 'C'
  },
  {
    user: {
      name: 'David Kim',
      avatar: "https://images.unsplash.com/photo-1696489647375-30cae68481f2",
      avatarAlt: 'Professional headshot of Asian man with glasses in gray sweater'
    },
    content: 'The streak tracking and notification system helped me build habits that actually stick. The anime-inspired design makes the whole experience incredibly immersive.',
    rating: 5,
    rank: 'A'
  },
  {
    user: {
      name: 'Lisa Rodriguez',
      avatar: "https://images.unsplash.com/photo-1708789353354-68a096dc9218",
      avatarAlt: 'Professional headshot of Hispanic woman with curly hair in black top'
    },
    content: 'Solo Leveling made habit formation fun for the first time in my life. The XP system and rank progression give me clear goals to work towards every single day.',
    rating: 4,
    rank: 'D'
  }];


  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-900 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Hunter Success Stories
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover how thousands of hunters have transformed their lives through gamified habit tracking. 
            Join the community and start your own success story.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials?.map((testimonial, index) =>
          <TestimonialCard
            key={index}
            user={testimonial?.user}
            content={testimonial?.content}
            rating={testimonial?.rating}
            rank={testimonial?.rank}
            delay={index * 150} />

          )}
        </div>

        {/* Community Stats */}
        <div className="mt-16 md:mt-20">
          <div className="bg-surface/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  98%
                </div>
                <div className="text-sm md:text-base text-text-secondary">
                  User Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-success mb-2">
                  85%
                </div>
                <div className="text-sm md:text-base text-text-secondary">
                  Habit Retention
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                  127
                </div>
                <div className="text-sm md:text-base text-text-secondary">
                  Avg. Streak Days
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                  4.9★
                </div>
                <div className="text-sm md:text-base text-text-secondary">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;