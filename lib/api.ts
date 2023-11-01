import { Movi } from "@/types"
const URL = "https://api.themoviedb.org/3/"

export async function list(): Promise<Movi[]> {
    const res = await fetch(`${URL}movie/popular?api_key=33448546178178719a87b8991a7fe2fc&page=1`)
  
    return res.json()
}