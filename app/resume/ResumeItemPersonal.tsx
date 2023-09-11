import React from 'react';
import ResumeItemWrapper from './ResumeItemWrapper';

type Props = {
    item: string;
};

const ResumeItemPersonal: React.FC<Props> = ({ item }) => {
    return <li className="mb-1">{item}</li>;
};

export default ResumeItemPersonal;
