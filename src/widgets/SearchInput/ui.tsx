import {Input} from '@/components/ui/input';
import {LoaderCircle} from 'lucide-react';
import {Command, CommandGroup, CommandItem, CommandList} from '@/components/ui/command';
import useSearch from '@/shared/hooks/useSearch';

export default function SearchInput() {
    const {
        query,
        setQuery,
        results,
        loading,
        handleSelectMovie
    } = useSearch();

    return (
        <div className="relative w-full sm:w-64">
            <Input
                type="text"
                placeholder="Поиск по фильмам..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pr-10"
                autoComplete="off"
            />
            {loading && (
                <LoaderCircle
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-6 w-6 animate-spin"/>
            )}

            {results.length > 0 && (
                <Command className="absolute z-50 w-full mt-2 shadow-lg rounded-md bg-background p-1 h-auto">
                    <CommandList>
                        <CommandGroup heading="Фильмы по Вашему запросу: ">
                            {results.map((movie) => (
                                <CommandItem
                                    key={movie.id}
                                    onSelect={() => handleSelectMovie(movie.id)}
                                >
                                    {movie.title} ({movie.release_date?.slice(0, 4) || '—'})
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            )}
        </div>
    );
}