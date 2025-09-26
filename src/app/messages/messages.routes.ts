import { Routes } from '@angular/router';
import { MessageList } from './message-list/message-list';

export const MESSAGES_ROUTES: Routes = [
  { path: '', component: MessageList }
];
