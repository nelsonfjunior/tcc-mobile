import { Publish } from "./Publish";
import { User } from "./User";

export interface Commentary {
    id?: string;
    content: string;
    whenSent?: string; 
    author: User;
    publish: Publish;
}