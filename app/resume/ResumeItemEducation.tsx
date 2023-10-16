import React from 'react';
import { Education } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';
import { Bau } from '../components/LocalFonts';

type Props = {
    item: Education;
};

const ResumeItemEducation: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <h2 className={'text-stone-700 font-medium ' + Bau.className}>{item.school}</h2>
            <h3 className={'m-0 mr-1 text-stone-500 font-medium tracking-tight ' + Bau.className}>{item.degreeType} in {item.degreeTitle}</h3>
            <p className={'mb-1'}>{item.startDate ? `${item.startDate} - ${item.endDate}` : item.endDate} &nbsp;|&nbsp; {item.location}</p>
            {item.description && <p>{item.description}</p>}
            {item.achievements.length > 0 && (
                <ul className={Bau.className}>
                    {item.achievements.map((achievement: string, index: number) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            )}
        </ResumeItemWrapper>
    );
};

export default ResumeItemEducation;
