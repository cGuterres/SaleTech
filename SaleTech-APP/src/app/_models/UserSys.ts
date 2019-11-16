import { UserRole } from './UserRole';

export class UserSys {
     id: number;
     login: string;
     email: string;
     password: string;
     userRoleId: number;
     userRole: UserRole;
}
