import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  effect?: 'blur' | 'opacity' | 'black-and-white';
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  effect = 'blur' 
}: LazyImageProps) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      effect={effect}
      className={className}
      wrapperClassName={className}
      threshold={100}
      placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23F5F5DC' width='400' height='300'/%3E%3C/svg%3E"
    />
  );
};
