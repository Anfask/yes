'use client'

import React from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface MissionVisionWrapperProps {
  children: React.ReactNode;
}

const MissionVisionWrapper: React.FC<MissionVisionWrapperProps> = ({ children }) => {
  const { elementRef, isVisible } = useScrollReveal("missionVisionSection");
  
  return (
    <div
      ref={elementRef}
      className={`mission_vision_section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default MissionVisionWrapper;
