import { User } from '../services/user-service';

export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export const getTimer = (timer: number) => {
    let hours = Math.trunc(timer / 3600);
    let minutes = Math.trunc((timer - 3600 * hours) / 60);
    let seconds = timer - hours * 3600 - minutes * 60;
    return `${getFormat(hours)}:${getFormat(minutes)}:${getFormat(seconds)}`;
};

export const getFormat = (digit: number) => (digit <= 9 ? `0${digit}` : `${digit}`);

export const fetchUserData = (data: User[], user: User) =>
    data.find((u) => u.email === user.email && u.password === user.password);

export const convertToSeconds = (hours: number = 0, minutes: number = 0, seconds: number = 0) => {
    return (hours * 3600) + (minutes * 60) + seconds;
}