import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getGenres = async (req: Request, res: Response) => {
  try {
    const genres = await prisma.genres.findMany();

    if (!genres) {
      return res.status(404).json({
        message: 'No genres found.',
      });
    }

    return res.status(201).json(genres);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Something went wrong.',
    });
  }
};
