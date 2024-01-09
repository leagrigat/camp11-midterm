import BoringGenreButton from '../components/BoringGenreButton';
import Button from '../components/Button';
import DateTimeButton from '../components/DateTimeButton';
import GenreButton from '../components/GenreButton';
import HomePageHeader from '../components/HomePageHeader';
import SeatBtn from '../components/SeatBtn';

function LoginPage() {
  return (
    <div className="bg-black px-5">
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

      <HomePageHeader
        name="Gris"
        avatarImg="https://ih1.redbubble.net/image.838053714.1459/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
      ></HomePageHeader>
    </div>
  );
}

export default LoginPage;
