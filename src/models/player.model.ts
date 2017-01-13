import { Role } from './role.model';

export interface Player {
    id: number;
    name: string;
    role: Role;
    score: number;
}