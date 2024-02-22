// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-unauthorized',
//   templateUrl: './unauthorized.component.html',
//   styleUrls: ['./unauthorized.component.css']
// })
// export class UnauthorizedComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div>
      <h2>Unauthorized Access</h2>
      <p>You don't have the necessary permissions to access this resource.</p>
    </div>
  `,
  styles: [`
    div {
      text-align: center;
      margin-top: 20px;
    }
  `],
})
export class UnauthorizedComponent {}
