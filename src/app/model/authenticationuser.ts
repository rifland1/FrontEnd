import  { Role } from '../model/role';
export class AuthenticationUser {

  id: string;
  username: string;
  roles:Array<Role>;

  constructor(id: string, username: string, roles:Array<Role>) {
    this.id = id;
    this.username = username;
    this.roles = roles;
  }


}
