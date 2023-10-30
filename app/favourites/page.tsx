"use client";
import Movie from "@/components/Movie";
import { FavoriteContext } from "@/context/FavoriteContext";
import { useContext } from "react";

export default function Favourite() {

    const { state } = useContext(FavoriteContext);

    return (
        <div className="flex flex-col items-center mx-10 lg:mx-20 my-5 lg:my-10">
            
            <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Favourites movies</h1>
            
            {state.favorites.length > 0 ? 
                
                <div className="grid grid-cols-3 gap-4">
                    {state.favorites.map((movie: any, index: number) => (
                        <Movie 
                            key={index} 
                            id={movie.id} 
                            title={movie.title} 
                            releaseDate={movie.releaseDate} 
                            img={movie.img}
                            isFavourite={movie.isFavourite}
                        />
                    ))}
                </div>:

                <div className="text-2xl leading-none tracking-tight text-gray-700">Nothing to show</div>
            }

        </div>
    )
}