export type ResumeItem = {
  id: number;
  title: string;
  company?: string;
  startDate: string;
  endDate: string;
  description?: string[];
  achievements?: string[];
};

type Props = {
    item: ResumeItemType;
};

const ResumeItemComponent: React.FC<Props> = ({ item }) => {
    return (
        <div className="mb-4">
            <h2>{item.title}</h2>
            <h3>{item.company}</h3>
            <p>{item.description}</p>
            <ul>
                {item.achievements?.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeItemComponent;