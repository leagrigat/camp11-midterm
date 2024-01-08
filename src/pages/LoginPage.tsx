import BoringGenreButton from '../components/BoringGenreButton';
import Button from '../components/Button';
import DateTimeButton from '../components/DateTimeButton';
import GenreButton from '../components/GenreButton';
import SeatBtn from '../components/SeatBtn';

function LoginPage() {
  return (
    <div>
      <GenreButton genre={'Adventure'}></GenreButton>
      <GenreButton genreId={28}></GenreButton>
      <BoringGenreButton
        genre={'Adventure'}
        genreIcon={'💎'}
        active={true}
      ></BoringGenreButton>
      <DateTimeButton active={true} dateTime="18:00"></DateTimeButton>
      <DateTimeButton active={false} dateTime="23 Dec"></DateTimeButton>
      <DateTimeButton
        disabled={true}
        active={false}
        dateTime="23 Dec"
      ></DateTimeButton>
      <Button disabled></Button>
      <Button variant="primary"></Button>
    </div>
  );
}

export default LoginPage;
