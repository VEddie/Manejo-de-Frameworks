import { User } from '../services/user-service';

export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export const fetchUserData = (data: User[], user: User) =>
    data.find((u) => u.email === user.email && u.password === user.password);