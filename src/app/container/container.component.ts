import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString: string[] = ['Vatsal', 'Dhyey', 'Sahil', 'Kash'];

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }
}
