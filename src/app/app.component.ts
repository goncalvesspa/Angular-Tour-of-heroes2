import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    console.log('teste ngonInit')
  }
  ngOnChanges() {
    console.log('teste');
  }
   title = 'Tour of Heroes';

  mudaVariavel() {
    this.title = "teste123";
  }



}
