import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('for') singupForm: NgForm
  defaultchoice='Advanced'
  dataForm = {
    password: '',
    subscription: '',
    password: ''
  }
  submitted=false;

  onSubmit() {
    this.dataForm.password = this.singupForm.value.password
    this.dataForm.subscription = this.singupForm.value.subscription
    this.dataForm.password = this.singupForm.value.password
    this.submitted=true
    console.log(this.singupForm.value)
  }

}
