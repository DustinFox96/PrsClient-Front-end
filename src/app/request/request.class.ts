import { User } from "../user/user.class";
import { RequestLines } from "../request-lines/request-lines.class";

export class Request {
    id: number = 0;
    description: string = "";
    justfication: string = "";
    rejectionReasson: string = "";
    deliveryMode: string = "PickUp";
    status: string = "New";
    total: number = 0;
    userId: number = 0;
    user: User = null;
    userName: string = "";
   
    requestLines: RequestLines[]
}

