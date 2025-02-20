export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Imagem {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
}

export default interface Projeto {
  title: string;
  excerpt: string;
  description: string;
  slug: string;
  image: Imagem;
  stacks: string[];
}
