import { Link } from 'react-router-dom';
import Button from '../Button';
import { SingleMovie } from '../../api/movies';
import QRCode from 'react-qr-code';

type TicketInformation = {
  movieId: string;
  date: string;
  time: string;
  price: string;
  seat: string[];
  movie: SingleMovie | undefined;
};

function TicketPreviewPage({
  movie,
  date,
  time,
  price,
  seat,
  movieId,
}: TicketInformation) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-white-heavy rounded-lg mb-6 grow">
        <img
          className="w-full rounded-t-lg min-h-40"
          key={movieId}
          src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
          alt=""
        />
        <div>
          <div className="px-6">
            <h1 className="text-white font-bold text-[23px] pt-2 pb-6">
              {movie?.title}
            </h1>
            <div className="flex justify-between gap-1">
              <div className="flex flex-col justify-start">
                <p className="text-dark">Date</p>
                <span className="text-white font-bold text-sm">{date}</span>
              </div>
              <div>
                <p className="text-dark">Time</p>
                <span className="text-white font-bold text-sm">{time}</span>
              </div>
              <div>
                <p className="text-dark">Price</p>
                <span className="text-white font-bold text-sm">{price}</span>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-6">
            <p className="text-dark">Seats</p>
            <span className="text-white font-bold text-sm">
              {seat.join(', ')}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between w-screen -ml-5 pb-3">
          <div className="rounded-full w-12 h-12 bg-dark "></div>
          <QRCode
            className="outline-dashed outline-2 p-4 border-white"
            size={160}
            bgColor="#494952"
            fgColor="#FFFFFF"
            value=""
          />
          <div className="rounded-full w-12 h-12 bg-dark"></div>
        </div>
      </div>

      <Link to={`/home`}>
        <Button size="lg" variant="primary">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default TicketPreviewPage;
