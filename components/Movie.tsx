"use client";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { FavoriteContext } from "@/app/context/FavoriteContext";
import { useContext } from "react";

type Props = {
    id: number
    title: string,
    img: string,
    releaseDate: string
}

const Movie = ({ id, title, releaseDate, img }: Props) => {

    const { state, dispatch } = useContext(FavoriteContext)

    const add = (id: number, title: string, releaseDate: string, img: string) => {
        const movie = {
            id: id,
            title: title,
            releaseDate: releaseDate,
            img: img
        }
        dispatch({ type: "ADD", payload: movie })
        console.log("state", state)
    }

    return (
        <Card>
            <CardHeader className="p-0 mb-2">
                <Image
                    src={img}
                    width={200}
                    height={100}
                    alt="Picture of movies"
                    className="rounded-t"
                /> 
            </CardHeader>
            <CardContent className="w-[200px]">
                <h5 className="text-md font-bold text-gray-900 block truncate">
                    { title }
                </h5>
            </CardContent>
            <CardFooter>
                <div className="flex flex-row justify-between w-full">
                    <span className="font-normal text-gray-500 block">
                        { releaseDate }
                    </span>
                    <svg onClick={() => add(id, title, releaseDate, img)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Movie;