export type Experience = {
    id: number;
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string[];
};

export type Award = {
    name: string;
    url: string;
};

export type Brag = {
    id: number;
    title: string;
    publisher: string;
    startDate: string;
    description: string;
    achievements: string[];
    awards: Award[];
    press: string[];
};

export type Education = {
    id: number;
    school: string;
    location: string;
    degreeType: string;
    degreeTitle: string;
    startDate?: string;
    endDate: string;
    description: string;
    achievements: string[];
};

export type ResumeData = {
    experience: Experience[];
    brags: Brag[];
    education: Education[];
    personal: string[];
    tech: string[];
};