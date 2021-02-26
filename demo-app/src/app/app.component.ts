import { Component } from '@angular/core';
import {io} from 'socket.io-client/build/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  private socket: any;
  public data: any;

  constructor() {
    // Connect Socket with server URL
    this.socket = io('http://127.0.0.1:3000');
  }
  public ngOnInit(): void {
    
    this.socket.on('notification', (data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}

