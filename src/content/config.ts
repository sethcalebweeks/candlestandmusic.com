import { z, defineCollection } from 'astro:content';
import albums from '../albums.json';

type NonEmptyArray<T> = [T, ...T[]]

const albumTitles = albums.map(album => album.name) as NonEmptyArray<string>;

const tracks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    album: z.enum(albumTitles),
  }),
});

const songs2025 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  'tracks': tracks,
  '2025-songs': songs2025,
};