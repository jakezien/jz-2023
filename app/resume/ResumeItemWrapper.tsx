
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ResumeItemWrapper: React.FC<Props> = ({ children }) => {
  return <div className="resume-item-wrapper mb-8">{children}</div>;
};

export default ResumeItemWrapper;
