import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form>
    <div class = "form-group">
      <label> Email </label><br/>
      <input type = "text" class = "form-control" > <br/><br/>
      <button type="submit" class = "btn btn-primary"> Submit </button>
     </div> 
  </form>
  `
})
export class SignupFormComponent {

}
