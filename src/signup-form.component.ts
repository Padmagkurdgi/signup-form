import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit) = "OnSubmit()">
    <div class = "form-group">
      <label> Email </label><br/>
      <input type = "text" class = "form-control" [(ngModel)]= "email" name = "email" required pattern=".+@.+" > <br/><br/>
      <button type="submit" class = "btn btn-primary"> Sign Up </button>
     </div> 
  </form>
  `,
  styles:[`
    input.ng-invalid{
        border: solid red 2px;
    }
  `]
})
export class SignupFormComponent {
  email='';
  OnSubmit(){
    console.log("Should submit  " + this.email);

  }
}
