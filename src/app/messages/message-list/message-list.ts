import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { MessageItem } from '../message-item/message-item';
import { MessageService } from '../../services/message';
import { BehaviorSubject, Observable } from 'rxjs';

interface Message {
  id?: number;
  text: string;
  author: string;
}

@Component({
  selector: 'app-message-list',
  imports: [CommonModule, FormsModule, MessageItem],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css'
})

export class MessageList implements OnInit {
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$: Observable<Message[]> = this.messagesSubject.asObservable();

  newMessageText = "";
  newMessageAuthor = "";

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(response => {
      this.messagesSubject.next(response.data);
    });
  }

  addMessage(): void {
    if (this.newMessageText && this.newMessageAuthor) {

      const newMessage = {
        text: this.newMessageText,
        author: this.newMessageAuthor
    }
    this.messageService.addMessage(newMessage).subscribe(response => {
      const currentMessages = this.messagesSubject.getValue();
      this.messagesSubject.next([...currentMessages, response]);
      this.newMessageText = "";
      this.newMessageAuthor = "";
    });
    }
  }

  removeLastMessage(): void {
    const currentMessages = this.messagesSubject.getValue();
    if (currentMessages.length === 0) {
      return;
    }

    this.messageService.removeLastMessage().subscribe(response => {
      this.messagesSubject.next(currentMessages.slice(0, -1));
    });
  }
}

