import { renderOgImage, ogSize, ogContentType, ogAlt } from "@/lib/ogImage";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage();
}
