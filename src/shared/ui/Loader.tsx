import {LoaderCircle} from 'lucide-react';
import {cn} from '@/lib/utils';

interface Props {
    className?: string;
}

export default function Loader({ className }: Props) {
    return (
        <div className="flex justify-center text-center my-6">
            <LoaderCircle className={cn('animate-spin h-10 w-10 text-primary/85', className)} />
        </div>
    );
}