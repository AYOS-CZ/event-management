export interface EventOperation {
    title: string;
    date: number;
    id: number;
    operation: Array<Attendant>;
    note: string;
    subEvents: {
        healing: {
            start: string;
            end: string;
            sessionLength: number;
            breakLength: number;
            slotsPerSession: number;
            pricePerSession: number;
        },
        lecture: {
            price: number;
        }
    }
}
 
export interface Attendant {
    name: string;
    user_id?: number;
    timeSlots: Array<{
        start: string;
        end: string;
        active?: boolean;
    }>,
    active?: boolean;
    lecture: boolean;
    paidOnline: any;
    paidOnsite: any;
    paidTotal?: any;
    note: string;
}