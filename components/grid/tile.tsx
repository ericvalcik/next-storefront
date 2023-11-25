import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';
import Hanger from 'public/hanger.svg';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'border-1 group flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 transition-all duration-150 hover:border-2 hover:border-blue-600'
      )}
    >
      <Hanger className="border-1 absolute top-6 w-32 fill-none stroke-white/10 px-2 transition-all duration-150 group-hover:fill-[#0f1014] group-hover:stroke-blue-600 group-hover:stroke-2" />
      {props.src && false ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
