import Note from '@/interfaces/Note';
import User from '@/interfaces/User';

export const getUserNotes = (userId: number) => {
    const data = localStorage.getItem('userNotes');

    if (data) {
        const notes: Note[] = JSON.parse(data);
        return notes.filter((n) => n.userId === userId);
    }

    return [];
};

export const setUserNotes = (data: Note[]) => {
    localStorage.setItem('userNotes', JSON.stringify(data));
};

export const getCurrentUser = (): User => {
    const data = localStorage.getItem('currentUser');

    if (data) return JSON.parse(data);

    return {} as User
};

export const setCurrentUser = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
};

export const deleteCurrentUser = () => {
    localStorage.removeItem('currentUser');
}


export const getUserList = (): User[] => {
    const data = localStorage.getItem('userList');

    if (data) return JSON.parse(data);

    return [];
};

export const setUserList = (user: User) => {
    const users = getUserList();
    localStorage.setItem('userList', JSON.stringify(users.push(user)));
};

export const setNewNote = (): Note => {
    return { id: 0, title: 'Untitled', content: '' };
};
