import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Movie from '@/components/Movie'
import { FileSpreadsheet } from 'lucide-react'

async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=33448546178178719a87b8991a7fe2fc&page=1')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  
  const movies = await getData()
 
  return (

    <div className="flex flex-col mx-10 lg:mx-20 my-5 lg:my-10">

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Movies, Actors..." />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>

      <div className="flex items-center overflow-auto overscroll-contain p-4 gap-x-4 my-5">
        
        {movies.results.map((movie: any, index: number) => (
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

    </div>
  )
}
