const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;

interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'jpg' | 'png';
}

/**
 * Build a Cloudinary URL with on-the-fly transformations.
 * publicId: e.g. "parroquia/hero"
 */
export function cloudinaryUrl(publicId: string, opts: CloudinaryOptions = {}): string {
  if (!cloudName) {
    console.warn('PUBLIC_CLOUDINARY_CLOUD_NAME not set — using placeholder');
    return `https://placehold.co/${opts.width ?? 800}x${opts.height ?? 600}`;
  }

  const transforms: string[] = [];

  if (opts.width)   transforms.push(`w_${opts.width}`);
  if (opts.height)  transforms.push(`h_${opts.height}`);
  if (opts.crop)    transforms.push(`c_${opts.crop}`);
  if (opts.quality) transforms.push(`q_${opts.quality}`);
  if (opts.format)  transforms.push(`f_${opts.format}`);

  const t = transforms.length ? transforms.join(',') + '/' : '';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${t}${publicId}`;
}
