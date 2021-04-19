export interface User {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    photoBlob: string;
    photoContentLength: number;
    photoContentType: string;
    role: Role;
    status: string;
}

export enum Role {
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPER_ADMIN'
}

export enum Status {
    Active = 'ACTIVE',
    Blocked = 'BLOCKED',
    Inactive = 'INACTIVE'
}
