import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Message {
  id?: number;
  text: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private apiUrl = 'http://localhost:3000/api/messages';
  private apiUrlLast = 'http://localhost:3000/api/messages/last';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addMessage(message: Message): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }

  removeLastMessage(): Observable<any> {
    return this.http.delete<any>(this.apiUrlLast);
  }

}
