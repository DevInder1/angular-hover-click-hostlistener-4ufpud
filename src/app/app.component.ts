import { Component } from '@angular/core';
import {
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  HostListener,
} from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  @HostListener('click', ['$event'])
  onclick(event) {
    if (event.target.matches('.editor-div')) {
      alert('click to editor div');
    }
  }

  @HostListener('mouseover', ['$event'])
  mouseover(event) {
    console.log('test');
    if (event.target.matches('.editor-div')) {
      alert('hover to editor div');
    }
  }
}
