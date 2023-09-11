import React from 'react';
import ResumeItemWrapper from './ResumeItemWrapper';

type Props = {
    item: string;
};

const ResumeItemTech: React.FC<Props> = ({ item }) => {
    return <li className='mb-2'>{item}</li>;
};

export default ResumeItemTech;
