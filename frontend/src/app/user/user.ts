export interface User {
    firstName: string;
    lastName: string;
    birthDate?: number;
    email: string;
    phone: string;
    role: 'admin' | 'operator' | 'user';
    token: string;
    comment?: string;
    validated?: boolean;
}