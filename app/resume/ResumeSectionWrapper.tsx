
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ResumeSectionWrapper: React.FC<Props> = ({ children }) => {
  return <div className="resume-section-wrapper">
    {children}
  </div>;
};

export default ResumeSectionWrapper;
