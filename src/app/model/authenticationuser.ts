import  { Roles } from '../enum/roles.enum';
export class AuthenticationUser {

  id: string;
  username: string;
  roles:Array<string>;

  constructor(id: string, username: string, roles:Array<string>) {
    this.id = id;
    this.username = username;
    this.roles = roles;
  }


}
