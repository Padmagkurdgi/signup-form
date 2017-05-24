import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit) = "OnSubmit(emailField)" novalidate #form="ngForm">
    <div class = "form-group">
      <label> Email </label><br/>
      <input type = "text" class = "form-control" #emailField ="ngModel"
      [(ngModel)]= "email" name = "email" required pattern=".+@.+" > <br/><br/>
      <p *ngIf= "emailField.touched && emailField.invalid && emailField.errors.required" class = "alert alert-danger"> Email is required </p>
      <p *ngIf= "emailField.touched && emailField.invalid && emailField.errors.pattern" class = "alert alert-danger"> Email pattern is invalid </p>
       <label> Password </label><br/>
      <input type = "password" class = "form-control" #passwordField ="ngModel"
      [(ngModel)]= "password" name = "password" required  > <br/><br/>
      <button type="submit" class = "btn btn-primary" [disabled]="form.invalid"> Sign Up </button>
     </div> 
  </form>
  `,
  styles:[`
    input.ng-touched.ng-invalid{
        border: solid red 2px;
    }
  `]
})
export class SignupFormComponent {
  email='';
  OnSubmit(form){
    console.log("emailField: " + form);
    form.resetForm();

  }
}
