export default interface Note {
    id?: number;
    userId?: number;
    title: string;
    content: string;
    editable?: boolean;
};