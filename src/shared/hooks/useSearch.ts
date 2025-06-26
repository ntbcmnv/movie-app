import {useRouter} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {IMovie} from '@/entities/movie/types';
import tmdb from '@/shared/api/tmdb';

export default function useSearch() {
    const router = useRouter()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(false)

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            setLoading(false)
            return
        }

        setLoading(true)
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current)

        debounceTimeout.current = setTimeout(async () => {
            try {
                const res = await tmdb.get('/search/movie', {params: {query: query.trim()}})
                setResults(res.data.results);
            } catch {
                setResults([])
            } finally {
                setLoading(false)
            }
        }, 500)

        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current)
        }
    }, [query])

    const handleSelectMovie = (id: number) => {
        setQuery('');
        setResults([]);
        router.push(`/movie/${id}`);
    };

    return {
        query,
        setQuery,
        results,
        loading,
        handleSelectMovie,
    }
};