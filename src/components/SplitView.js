import React, { useState, createRef, useEffect } from 'react';

const LeftPanel = ({ children, leftWidth, setLeftWidth }) => {
 const leftRef = createRef();
 useEffect(() => {
  if (leftRef.current) {
    if (!leftWidth) {
      setLeftWidth(leftRef.current.clientWidth);
      return;
    }
    leftRef.current.style.width = `${leftWidth}px`;
  }
 }, [leftRef, leftWidth, setLeftWidth]);
 return <div ref={leftRef}>{children}</div>;
};

export const SplitView = ({ top, left, right, bottom }) => {
  return (
    <div className="splitView">
      <TopPanel>{top}</TopPanel>
      <LeftPanel>{left}</LeftPanel>
      <RightPanel>{right}</RightPanel>
      <BottomPanel>{bottom}</BottomPanel>
    </div>
  );
 };
 
