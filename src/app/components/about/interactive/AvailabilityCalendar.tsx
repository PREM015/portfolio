'use client';
import { useState } from 'react';

export default function AvailabilityCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = 30;
  const availableDates = [5, 7, 12, 15, 18, 22, 25, 28];

  return (
    <div className="my-12 p-8 bg-white/5 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-cyan-300">Availability Calendar</h3>
      
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-400 p-2">
            {day}
          </div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isAvailable = availableDates.includes(day);
          return (
            <button
              key={day}
              onClick={() => isAvailable && setSelectedDate(new Date(2024, 0, day))}
              disabled={!isAvailable}
              className={`p-3 rounded-lg text-center transition-all ${
                isAvailable
                  ? 'bg-green-500/20 hover:bg-green-500/30 cursor-pointer border border-green-500/50'
                  : 'bg-white/5 cursor-not-allowed opacity-50'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
          <p className="text-green-300">
            ✅ Selected: {selectedDate.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
        </div>
      )}

      <div className="mt-6 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500/20 border border-green-500/50 rounded"></div>
          <span className="text-gray-400">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white/5 rounded"></div>
          <span className="text-gray-400">Unavailable</span>
        </div>
      </div>
    </div>
  );
}
