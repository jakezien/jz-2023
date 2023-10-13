import { Experience } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';
import { IBM_Plex_Mono } from 'next/font/google'
import { H2 } from '../components/TypeStyles';
import { Exec } from '../components/LocalFonts';


type Props = {
    item: Experience;
};

const ResumeItemExperience: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <h2 className='text-stone-700'>{item.title}</h2>

            <div className='mb-2'>
                <h3 className='m-0 mr-1 text-stone-500'> at {item.company} </h3> 
                <p className='m-0 text-stone-500 text-base font-medium'>{item.startDate} – {item.endDate}</p>
                <p className='m-0 text-stone-500 text-base font-medium'> {item.companyExit} </p>
                <p className='m-0 text-stone-400 text-base font-medium'> {item.companyOneliner} </p>
            </div>


            <ul className='mb-2'>
                {item.description.map((desc, index) => (
                    <li key={index} className='mb-2 text-stone-700 '>{desc}</li>
                ))}
            </ul>
        </ResumeItemWrapper>
    );
};

export default ResumeItemExperience;
