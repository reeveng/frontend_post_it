// import { Pipe, PipeTransform } from '@angular/core';
// import { User } from '../models/user.model';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';

// @Pipe({
//   name: 'userFilter'
// })
// export class UserFilterPipe implements PipeTransform {

//   constructor(private route: ActivatedRoute) { }

//   transform(users: Observable<User[]>): any {
//     return users.map(users => users {
//       let user = users.filter(user => user.id == this.route.params["id"]);
//       return user.length > 0 ? user[0] : null;
//     });

//   }
// }
