import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Message {
  text: string;
  author: string;
}

@Component({
  selector: 'tr[app-message-item]',
  imports: [CommonModule],
  templateUrl: './message-item.html',
  styleUrl: './message-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageItem {
  @Input() message!: Message;

  getAuthorStyle() {
    if (this.message.author === 'Admin') {
      return { 'font-weight': 'bold', 'color': 'red' };
    } else {
      return {};
    }
  }
}

