'use client';

import { useState } from 'react';
import Sentiment from 'sentiment';
import Image from 'next/image';
import cry from '../assets/cry.gif';
import dance from '../assets/dance.gif';
import pokerFace from '../assets/normal.png';

const sentiment = new Sentiment();

const stickers = {
  poker: pokerFace,
  happy: dance,
  sad: cry
};

export default function SentimentCaptcha() {
  const [input, setInput] = useState('');
  const [face, setFace] = useState<'poker' | 'happy' | 'sad'>('poker');
  const [result, setResult] = useState<'pass' | 'fail' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { score } = sentiment.analyze(input);
    if (score > 1) {
      setFace('happy');
      setResult('pass');
    } else if (score < -1) {
      setFace('sad');
      setResult('fail');
    } else {
      setFace('poker');
      setResult('fail');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black-100">
      <h1 className="text-3xl font-bold mb-4">Are you nice to peter?</h1>
      <Image
        src={stickers[face]}
        alt="Sticker Face"
        width={200}
        height={200}
        className="mb-4"
      />
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border rounded mb-4 text-lg"
          placeholder="Say something nice..."
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {result !== null && (
        <p className={`mt-4 text-xl ${result === 'pass' ? 'text-green-600' : 'text-red-600'}`}>
          {result === 'pass' ? 'CAPTCHA Passed! 😊' : 'CAPTCHA Failed 😢'}
        </p>
      )}
    </div>
  );
}
