import React from 'react';
import { Education } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';

type Props = {
    item: Education;
};

const ResumeItemEducation: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <h2 className='text-stone-700'>{item.school}</h2>
            <h3 className='font-normal'>{item.degreeType} in {item.degreeTitle}</h3>
            <p className='mb-1'>{item.startDate ? `${item.startDate} - ${item.endDate}` : item.endDate} &nbsp;|&nbsp; {item.location}</p>
            {item.description && <p>{item.description}</p>}
            {item.achievements.length > 0 && (
                <ul>
                    {item.achievements.map((achievement: string, index: number) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            )}
        </ResumeItemWrapper>
    );
};

export default ResumeItemEducation;
