import Movie from '@/components/Movie'
import Search from '@/components/Search'

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

      <Search />

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
