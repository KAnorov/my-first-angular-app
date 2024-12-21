import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
value = 'main_default_';
condition = true;
togleCondition(){this.condition = !this.condition};
items = ['Tom', 'Bob', 'Sam', 'Bill'];
  today = new Date;
  PI = Math.PI;
}