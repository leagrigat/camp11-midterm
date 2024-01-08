import BoringGenreButton from '../components/BoringGenreButton';
import DateTimeButton from '../components/DateTimeButton';
import GenreButton from '../components/GenreButton';
import PaginationIcon from '../components/PaginationIcon';

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
    </div>
  );
}

export default LoginPage;
