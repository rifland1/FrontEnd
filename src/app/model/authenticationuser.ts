import  { Roles } from '../enum/roles.enum';
export class AuthenticationUser {

  id: string;
  username: string;
  roles:Array<string>;
  isAdmin:boolean;

  constructor(id: string, username: string, roles:Array<string>, isAdmin: boolean) {
    this.id = id;
    this.username = username;
    this.roles = roles;
    this.isAdmin = isAdmin;
  }


}
