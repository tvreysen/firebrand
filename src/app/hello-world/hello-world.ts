import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld {
  message = 'Hello from the component!';

}
