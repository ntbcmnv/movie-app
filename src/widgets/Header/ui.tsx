'use client'

import Link from 'next/link'
import SearchInput from '../SearchInput/ui'
import {Clapperboard} from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-slate-800 text-white py-4 px-6 shadow-md relative">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/" className="text-xl font-semibold flex items-center gap-2">
                    <Clapperboard className="sm:h-7 sm:w-7"/>
                    <h2 className="font-semibold text-white">Overlook</h2>
                </Link>
                <SearchInput/>
            </div>
        </header>
    );
}
