'use client';
import { useState, useEffect } from 'react';

export default function VoiceNavigation() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      setTranscript(text);

      // Simple voice commands
      if (text.includes('home')) window.location.hash = '#hero';
      if (text.includes('about')) window.location.hash = '#about';
      if (text.includes('skills')) window.location.hash = '#skills';
      if (text.includes('projects')) window.location.hash = '#projects';
      if (text.includes('contact')) window.location.hash = '#contact';
    };

    recognition.onend = () => setIsListening(false);

    if (isListening) {
      recognition.start();
    }

    return () => recognition.stop();
  }, [isListening]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsListening(!isListening)}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
          isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
        }`}
        aria-label="Toggle voice navigation"
      >
        🎤
      </button>
      {transcript && (
        <div className="absolute top-14 right-0 bg-white/10 backdrop-blur-md p-3 rounded-lg text-sm">
          {transcript}
        </div>
      )}
    </div>
  );
}
