import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})

export class SwitcherComponent implements OnInit{

    isLoginActive: boolean = true;
    userChoice: string = 'login';

    @Output() formEvent = new EventEmitter<string>();
    
  toggleActive(activeElement: string): void {
    if (activeElement === 'login') {
      this.isLoginActive = true;
      this.userChoice = 'login'
    } else {
      this.isLoginActive = false;
      this.userChoice = 'signup'
    }

    this.formEvent.emit(this.userChoice)
  }

  ngOnInit(): void {
    this.formEvent.emit(this.userChoice)

  }
}


