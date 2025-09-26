import { Routes } from '@angular/router';
import { Home } from './home/home';


export const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.routes').then(m => m.MESSAGES_ROUTES)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
