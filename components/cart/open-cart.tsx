import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity,
  onClick
}: {
  className?: string;
  quantity?: number;
  onClick?: () => void;
}) {
  return (
    <button
      aria-label="Open cart"
      onClick={onClick}
      className="rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-transparent"
    >
      <div className="relative flex h-7 items-center justify-center gap-2 px-3 text-sm text-white transition-colors dark:border-neutral-700 dark:text-white">
        <ShoppingCartIcon className={clsx('h-4', className)} />
        Cart
        {quantity ? (
          <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
            {quantity}
          </div>
        ) : null}
      </div>
    </button>
  );
}
