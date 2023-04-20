import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent implements OnInit {

  constructor(private dashboard: DashboardService, private router: Router) { }

  @Output() consumptionEvent = new EventEmitter<boolean>();

  error: string = ''
  consumptionForm: FormGroup = new FormGroup({})
  closed: boolean = true;

  ngOnInit(): void {
    this.consumptionForm = this.createForm();
  }

  createForm(): FormGroup {
    return new FormGroup({
      size: new FormControl("", [Validators.required]),
      consumption: new FormControl("", [Validators.required]),
    })
  }

  close() {
    if (this.closed) {
      this.closed = false;
      this.consumptionEvent.emit(this.closed)
      window.location.reload()
    }
  }

  updateConsumption() {
    const formData = {
      House: this.consumption()
    }
    console.log(formData)

    this.dashboard.updateConsumption(formData).subscribe(
      res => {
        this.error = 'noError'
        console.log(res)
      }, error => this.error = error.error.Message
    )
  }

  consumption() {
    let consumption = this.consumptionForm.value.consumption
    let size = this.consumptionForm.value.size;

    switch (size) {

      case 'SMALL':

        switch (consumption) {
          case 'LOW':
            return 1;
          case 'MEDIUM':
            return 2;
          case 'HIGH':
            return 3;
          default:
            return 0;
        }

      case 'MEDIUM':

        switch (consumption) {
          case 'LOW':
            return 4;
          case 'MEDIUM':
            return 5;
          case 'HIGH':
            return 6;
          default:
            return 0;
        }

      case 'LARGE':

        switch (consumption) {
          case 'LOW':
            return 7;
          case 'MEDIUM':
            return 8;
          case 'HIGH':
            return 9;
          default:
            return 0;
        }

      default:
        return 0;
    }
  }
}
