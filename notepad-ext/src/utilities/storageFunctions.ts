import Note from '../interfaces/Note';
import User from '../interfaces/User';

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

export const getNextNoteId = () => {
    const allNotes = localStorage.getItem('userNotes');

    if(allNotes !== null) {
        let jsonNotes: Note[] = JSON.parse(allNotes)
        return jsonNotes.length + 1;
    }
    // If array is empty
    return 1;

}

export const saveNote = (note: Note) => {
    const allNotes = localStorage.getItem('userNotes') || '[]';
    let jsonNotes: Note[] = JSON.parse(allNotes);

    if(!!jsonNotes.find(n => n.id === note.id)) {
        const editedNotes = jsonNotes.map(n => n.id === note.id ? {...n, content: note.content} : n)
        setUserNotes(editedNotes);
        return;
    }
        
    else
        jsonNotes.push(note);

    setUserNotes(jsonNotes);
}

export const deleteUserNote = (noteId: number) => {
    const allNotes = localStorage.getItem('userNotes') || '[]';
    let jsonNotes: Note[] = JSON.parse(allNotes);
    let filteredNotes = jsonNotes.filter(n => n.id !== noteId);
    setUserNotes(filteredNotes);
}

export const getCurrentUser = () => {
    const data = localStorage.getItem('currentUser');

    if (data) return JSON.parse(data);
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
    let users = getUserList();
    users.push(user);
    localStorage.setItem('userList', JSON.stringify(users));
};

export const userExists = (user: User) => {
    const users = getUserList();
    if(users.find(u => u.username === user.username && u.password === user.password))
        return true;

    return false;
}

export const fetchUser = (username: string, password: string): User => {
    return getUserList().find(u => u.username === username && u.password === password) || {} as User;
};

export const setNewNote = (): Note => {
    return { id: 0, title: 'Untitled', content: '' };
};