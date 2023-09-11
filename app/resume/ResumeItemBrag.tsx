// BragItem.tsx

import React from 'react';
import { Brag } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';

type Props = {
    item: Brag;
};

const ResumeItemBrag: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <h2>{item.title}</h2>
            <h3 className='font-normal'>{item.publisher}</h3>
            <p>{item.startDate}</p>
            {item.description && <p>{item.description}</p>}
            <ul>
                {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
            <div className='md:flex md:flex-row'>
                {item.awards.length > 0 && (
                    <div  className="flex-1">
                        <h4>Awards</h4>
                        <ul>
                            {item.awards.map((award, index) => (
                                <li key={index}>
                                    <a href={award.url} target="_blank" rel="noopener noreferrer">
                                        {award.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {item.press.length > 0 && (
                    <div className="flex-1">
                        <h4>Press</h4>
                        <ul>
                            {item.press.map((pressItem, index) => (
                                <li key={index}>{pressItem}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </ResumeItemWrapper>
    );
};

export default ResumeItemBrag;
