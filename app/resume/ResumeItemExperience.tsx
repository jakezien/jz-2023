import { Experience } from './ResumeTypes';
import ResumeItemWrapper from './ResumeItemWrapper';

type Props = {
    item: Experience;
};

const ResumeItemExperience: React.FC<Props> = ({ item }) => {
    return (
        <ResumeItemWrapper>
            <h2 className='text-stone-800'>{item.title}</h2>
            <h3 className='m-0 text-stone-500'> at {item.company}</h3>
            <p className='mt-0 mb-0.5 text-stone-500 font-semibold'>{item.startDate} – {item.endDate}</p>
            <ul>
                {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </ResumeItemWrapper>
    );
};

export default ResumeItemExperience;
