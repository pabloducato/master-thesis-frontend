export interface Course {
    active: boolean;
    credits: number;
    department: string;
    durationOfUnit: string;
    id: number;
    name: string;
    numberOfHours: string;
    semester: Semester;
    unitCode: string;
    courseCoordinatorIds: number[];
    studentIds: number[];
}

export enum Semester {
    S,
    W
}
