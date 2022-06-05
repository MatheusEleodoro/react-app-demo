import { type } from "os";

export type RequestForm = {
    id?: number
    idAreaUsuario?:number;
    responsavel?:number;
    nome?:string;
    email?:string
    senha?:string
    dataInicio?:string
    dataFim?:string
}