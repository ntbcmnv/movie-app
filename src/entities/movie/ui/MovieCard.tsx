import {Card, CardContent} from '@/components/ui/card'
import {IMovie} from '../types'
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import Image from 'next/image'
import {useMoviesStore} from '@/shared/store/useMoviesStore';
import Link from 'next/link';

dayjs.locale('ru')

interface Props {
    movie: IMovie;
}

export function MovieCard({movie}: Props) {
    const {setFromPage} = useMoviesStore();

    const handleClick = () => {
        const pageFromUrl = new URLSearchParams(window.location.search).get('page')
        setFromPage(Number(pageFromUrl) || 1)
    };

    return (
        <Link href={`/movie/${movie.id}`} onClick={handleClick}>
            <Card
                className="hover:scale-[1.02] transition-transform cursor-pointer h-full flex flex-col pt-0 pb-4 gap-3">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-t-xl w-full object-contain mx-auto"
                    width={500}
                    height={500}
                />
                <CardContent className="flex flex-col flex-1 justify-between p-4">
                    <h2 className="text-lg font-semibold">{movie.title}</h2>
                    <p className="text-muted-foreground text-sm my-2">Дата
                        выхода: {dayjs(movie.release_date).format('D MMMM YYYY')}</p>
                    <p className="text-sm line-clamp-3">{movie.overview}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
