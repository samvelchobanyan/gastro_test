export interface NewsListingProps {
  image?: string | null;
  title?: string;
  publishedAt?: string;
  onClick?: (() => void) | null;
}

export function NewsListing(props: NewsListingProps): JSX.Element;
