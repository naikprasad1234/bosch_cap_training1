using {prasad.db.master} from '../db/datamodel';

service MyService @(path:'MyService')   {

    function api(name:String) returns String;
    entity EmployeeSrv as projection on master.employees;
}