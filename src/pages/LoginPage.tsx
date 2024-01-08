import BoringGenreButton from '../components/BoringGenreButton';
import GenreButton from '../components/GenreButton';

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
    </div>
  );
}

export default LoginPage;
