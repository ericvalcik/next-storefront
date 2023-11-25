import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({ item, priority }: { item: Product; priority?: boolean }) {
  return (
    <div
      className={
        'mt-8 rounded-2xl bg-gradientdown transition-all duration-150 first:mt-0 hover:shadow-lgcenter hover:shadow-white/10 md:col-span-1 md:row-span-1'
      }
    >
      <Link
        className="relative block aspect-[3.5/5] h-full w-full"
        href={`/product/${item.handle}`}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={'(min-width: 768px) 66vw, 100vw'}
          priority={priority}
          alt={item.title}
          label={{
            position: 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function TwoColGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl columns-1 gap-8 pb-4 md:columns-2">
      <ThreeItemGridItem item={firstProduct} priority={true} />
      <ThreeItemGridItem item={secondProduct} priority={true} />
      <ThreeItemGridItem item={thirdProduct} />
    </section>
  );
}
