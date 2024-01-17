import Header from '../components/Header';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';

function CastAndCrewPage() {
  // task 2: read out moviedId from URL
  /* const pathArray = window.location.pathname.split('/');
  const movieId = pathArray[2];
  console.log(movieId); */

  // We used hook instead
  const { movie } = useGetSingleMovie();

  // task 3: fetch cast and crew data
  const castData = movie ? movie.credits.cast : [];
  const crewData = movie ? movie.credits.crew : [];

  // loop through array and extract the values we need: Name, job, image

  // task 4: console log the cast and crew data on the page
  console.log(castData);
  console.log(crewData);

  //access to cast names
  // const castNames = castData.map(castName => castName.name);

  return (
    <>
      <div>
        <Header header="Cast & Crew" />
      </div>
      {/* rendering cast members */}
      <div className="mt-8">
        {castData.map(castMember => (
          <div key={castMember.id} className="flex gap-5 pb-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
              alt={castMember.name}
              className="h-[64px] w-[64px] object-cover"
            />
            <div>
              <h3>{castMember.name}</h3>
              <p>{castMember.character}</p>
            </div>
          </div>
        ))}
      </div>
      {/* rendering crew members */}
      <div>
        {crewData.map(crewMember => (
          <div key={crewMember.id} className="flex gap-5 py-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
              alt={crewMember.name}
              className="h-[64px] w-[64px] object-cover"
            />
            <div>
              <h3>{crewMember.name}</h3>
              <p>{crewMember.job}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CastAndCrewPage;
