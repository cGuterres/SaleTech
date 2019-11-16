import { Gender } from './Gender';
import { Region } from './Region';
import { City } from './City';
import { Classification } from './Classification';
import { UserSys } from './UserSys';

export class Customer {
     id: number;
     name: string ;
     phone: string ;
     genderId: number;
     gender: Gender;
     cityId: number;
     city: City;
     regionId: number;
     region: Region;
     lastPurchase: Date;
     classificationId: number;
     classification: Classification;
     userSysId: number;
     userSys: UserSys;
}
