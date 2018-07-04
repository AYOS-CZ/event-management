export interface EventOperation {
    title: string;
    date: number;
    id: number;
    operation: Array<Attendant>;
    note: string;
}

export interface Attendant {
    name: string;
    user_id: number;
    timeSlots: Array<{
        start: string;
        end: string;
        active: boolean;
    }>,
    active: boolean;
    lecture: boolean;
    paidOnline: number;
    paidOnsite: number;
    note: string;
}