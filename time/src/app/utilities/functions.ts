import { User } from "../services/user-service";

export const fetchUserData = (data: User[], user: User) => data.find(u => u.email === user.email && u.password === user.password);