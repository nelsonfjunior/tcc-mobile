import { Commentary } from "./Commentary";
import { Group } from "./Group";
import { User } from "./User";

export interface Publish {
    id?: string;
    description: string;
    image: string;
    whenSent?: string;
    author: User;
    commentaries?: Commentary[];
    groups?: Group[];
  }