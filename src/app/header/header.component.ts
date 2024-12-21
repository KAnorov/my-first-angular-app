import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  value = 'header_default_';
  h = 20;
  increaseH() {
    this.h += 5;
  }
  height = 100
  dicreaseH() {
    this.height -= 5;
  }
  condition = true;
  toggleCondition() { this.condition = !this.condition }

}
