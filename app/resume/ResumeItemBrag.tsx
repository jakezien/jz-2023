// BragItem.tsx

import React from 'react';
import { Brag } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';
import { IBM_Plex_Mono } from 'next/font/google'
import { H2 } from '../components/TypeStyles';
import { Bau } from '../components/LocalFonts';

const plex = IBM_Plex_Mono({ weight: ['400', '600'], subsets: ['latin'] })

type Props = {
    item: Brag;
};

const ResumeItemBrag: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <div className='mb-2'>
                <h2 className={'text-stone-700 font-medium ' + Bau.className}>{item.title}</h2>
                <h3 className={'m-0 mr-1 text-stone-500 font-medium tracking-tight ' + Bau.className}>at {item.publisher}</h3>
                <p className='m-0 text-stone-500 text-base font-medium'>{item.startDate}</p>
                <p className='m-0 text-stone-400 text-base font-medium'>{item.description}</p>
            </div>
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
