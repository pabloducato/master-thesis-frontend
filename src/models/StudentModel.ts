export interface Student {
    academicYear: string;
    currentAddress: string;
    dateOfBirth: Date;
    degreeOfStudy: DegreeOfStudy;
    department: string;
    email: string;
    fieldOfStudy: string;
    firstName: string;
    id: number;
    lastName: string;
    matriculationNumber: number;
    nationality: string;
    periodOfStudyFrom: Date;
    periodOfStudyUntil: Date;
    phone: string;
    photoBlob: string;
    placeOfBirth: string;
    semester: Semester;
    sex: Sex;
    studyCycle: StudyCycle;
    courseIds: number[];
    sendingInstitutionIds: number[];
}

export enum DegreeOfStudy {
    Bachelor = 'BACHELOR',
    Master = 'MASTER'
}

export enum Semester {
    S,
    W
}

export enum Sex {
    Male = 'MALE',
    Female = 'FEMALE',
    Hidden = 'HIDDEN'
}

export enum StudyCycle {
    FullTime = 'FULL_TIME',
    External = "EXTERNAL"
}

