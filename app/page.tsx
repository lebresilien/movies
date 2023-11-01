"use client"
import Movie from '@/components/Movie'
import Search from '@/components/Search'
import { Movi } from '@/types';
import { ChangeEvent, useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
const URL = "https://api.themoviedb.org/3/"

/* async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=33448546178178719a87b8991a7fe2fc&page=1')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
} */

const sk = [1, 2, 3, 4]

export default function Home() {
  
  const [movies, setMovies] = useState<Movi[]>([]);
  const [isLoading, setLoading] = useState(true)
  const [text, setText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
    fetch(`${URL}movie/popular?api_key=33448546178178719a87b8991a7fe2fc&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        setLoading(false)
      })
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  const like = (id: number) => {
    const cop = [...movies]
    const item = movies.find(m => m.id === id)
    console.log('here we go', item)
    if(item) item.isFavourite = true
    setMovies(cop)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const research = () => {
    setLoading(true)
    fetch(`${URL}search/movie?query=${text}&api_key=33448546178178719a87b8991a7fe2fc&page=1`)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
      setLoading(false)
    })
  }

  return (

    <div className="flex flex-col mx-10 lg:mx-20 my-5 lg:my-10">
       
      <Search text={text} handleChange={handleChange} research={research} />

      {isLoading ?

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 my-5">
          {sk.map((s) => (
            <div className="flex flex-col items-center space-y-4" key={s}>
                <Skeleton className="h-32 w-20" />
                <div className="flex flex-col items-center space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
            </div>
          ))}
        </div>:

        <div className="flex items-center overflow-auto overscroll-contain p-4 gap-x-4 my-5">
          {movies.map((movie: any, index: number) => (
              <Movie 
                key={index} 
                id={movie.id} 
                title={movie.title} 
                releaseDate={movie.release_date} 
                img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                isFavourite={false}
              />
            ))} 
        </div>
      }

    </div>
  )
}
