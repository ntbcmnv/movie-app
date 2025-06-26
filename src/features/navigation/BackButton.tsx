'use client'

import {useRouter} from 'next/navigation'
import {Button} from '@/components/ui/button'
import {ArrowLeft} from 'lucide-react'
import {useMoviesStore} from '@/shared/store/useMoviesStore';

export default function BackButton() {
    const router = useRouter();
    const {fromPage} = useMoviesStore();

    return (
        <Button
            onClick={() => router.push(`/?page=${fromPage}`)}
            variant="outline"
            className="flex items-center gap-1 mb-6 hover:bg-muted hover:shadow-sm"
        >
            <ArrowLeft className="h-6 w-6"/>
            Назад
        </Button>
    );
}
