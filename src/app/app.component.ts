import { Component, HostListener, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent   {
  colors = [
    {value: 'black', viewValue: 'שחור'},
    {value: 'grey', viewValue: 'אפור'},
    {value: 'blue', viewValue: 'כחול'}
  ];
  @ViewChild('top', {static: true}) top: ElementRef;
  @HostListener('window:scroll', ['$event']) scroll(e) {

    // this.top.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' });
  }


}