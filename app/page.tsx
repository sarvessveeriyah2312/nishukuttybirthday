'use client';

import React, { useState } from 'react';
import CountdownPage from '../components/CountdownPage';
import BirthdayPage from '../components/BirthdayPage';

export default function Home() {
  const [showBirthday, setShowBirthday] = useState(false);
  
  // Set your girlfriend's birthday date here
  // const birthdayDate = new Date('2025-06-14T00:00:00');
  const birthdayDate = new Date('');
  
  // For testing purposes, you can set a date just a few seconds in the future:
  // const birthdayDate = new Date(Date.now() + 10000); // 10 seconds from now
  
  const girlfriendName = "My Love"; // Change this to her name

  const handleCountdownEnd = () => {
    setShowBirthday(true);
  };

  // Check if birthday has already passed
  const now = new Date();
  const isAfterBirthday = now >= birthdayDate;

  return (
    <>
      {(showBirthday || isAfterBirthday) ? (
        <BirthdayPage girlfriendName={girlfriendName} />
      ) : (
        <CountdownPage 
          targetDate={birthdayDate} 
          onCountdownEnd={handleCountdownEnd} 
        />
      )}
    </>
  );
}