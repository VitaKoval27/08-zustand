import type { Note } from "@/types/note";
import axios from "axios";


export interface FetchNotesProps{
   search?:string,
   tag?:string,
   page:number,
   perPage:number
}

export interface FetchResponse{
    notes:Note[],
    totalPages:number
}

export interface newNoteProps{
    title:string,
    content:string,
    tag:string
}

axios.defaults.baseURL="https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  process.env.NEXT_PUBLIC_NOTEHUB_TOKEN
}`;



export  async function fetchNotes(optinos:FetchNotesProps):Promise<FetchResponse>{
    const{search="",tag,page=1,perPage=12}= optinos

    const finalSearch=search||undefined
    const finalTag=tag==="all"||tag===""?undefined:tag
    
    const params={
        ...(finalSearch&&{search:finalSearch}),
        ...(finalTag&&{tag:finalTag}),
        page,
        perPage
    }
    const response= await axios.get<FetchResponse>("/notes",{params})
    return response.data
}

export  async function deleteNote(id:string) {
    const response=await axios.delete<Note>(`/notes/${id}`)
    return response.data
}

export async function getSingleNote(id:string) {
    const response =await axios.get<Note>(`/notes/${id}`)
    return response.data
    
}

export async function createNote(newNote:newNoteProps) {
    const response= await axios.post<Note>("/notes",newNote)
    return response.data
}