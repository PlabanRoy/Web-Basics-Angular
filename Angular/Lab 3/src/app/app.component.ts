import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab3';
  choices=['yes','no'];

  productcatagory = [{'id':1, 'name':'Grocery'}, {'id':2, 'name': 'Mobile'}, {'id':3, 'name': 'Electronics'},{'id':4, 'name': 'Cloths'}];

}
