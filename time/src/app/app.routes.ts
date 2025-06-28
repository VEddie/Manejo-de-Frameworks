import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ComponentList } from './pages/component-list/component-list';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'register', component: Register },
    { path: 'component-list', component: ComponentList },
    { path: '**', redirectTo: '' },
];
