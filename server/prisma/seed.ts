import { PrismaClient } from '@prisma/client';
import { NextFunction } from 'express';

const prisma = new PrismaClient();

export const genresLibrary = [
  {
    genre: 'Action',
    emoji: '🧨',
    genreId: 28,
    isSelected: false,
  },
  {
    genre: 'Adventure',
    emoji: '💎',
    genreId: 12,
    isSelected: false,
  },
  {
    genre: 'Animation',
    emoji: '🦁',
    genreId: 16,
    isSelected: false,
  },
  {
    genre: 'Comedy',
    emoji: '🤣',
    genreId: 35,
    isSelected: false,
  },
  {
    genre: 'Crime',
    emoji: '🚔',
    genreId: 80,
    isSelected: false,
  },
  {
    genre: 'Documentary',
    emoji: '🎥',
    genreId: 99,
    isSelected: false,
  },
  {
    genre: 'Drama',
    emoji: '🎭',
    genreId: 18,
    isSelected: false,
  },
  {
    genre: 'Family',
    emoji: '👨‍👩‍👧',
    genreId: 10751,
    isSelected: false,
  },
  {
    genre: 'Fantasy',
    emoji: '🦄',
    genreId: 14,
    isSelected: false,
  },
  {
    genre: 'History',
    emoji: '⏳',
    genreId: 36,
    isSelected: false,
  },
  {
    genre: 'Horror',
    emoji: '🔪',
    genreId: 27,
    isSelected: false,
  },
  {
    genre: 'Music',
    emoji: '🎧',
    genreId: 10402,
    isSelected: false,
  },
  {
    genre: 'Mystery',
    emoji: '🔎',
    genreId: 9648,
    isSelected: false,
  },
  {
    genre: 'Romance',
    emoji: '😍',
    genreId: 10749,
    isSelected: false,
  },
  {
    genre: 'Science Fiction',
    emoji: '👽',
    genreId: 878,
    isSelected: false,
  },
  {
    genre: 'Thriller',
    emoji: '😱',
    genreId: 53,
    isSelected: false,
  },
];

async function seedGenres() {
  try {
    const mappedGenres = genresLibrary.map(async genreData => {
      const { genreId, ...rest } = genreData;

      return await prisma.genres.upsert({
        where: { genreId },
        update: rest,
        create: { genreId, ...rest },
      });
    });
    return mappedGenres;
  } catch (err) {
    return err;
  } finally {
    await prisma.$disconnect();
  }
}

seedGenres()
  .then(res => {
    console.log('Genres seeded successfully');
  })
  .catch(err => {
    console.log(err);
  });
