import { Fragment } from 'react';
import Header from '../components/Header';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import { Tab } from '@headlessui/react';

function CastAndCrewPage() {
  // We can use our hook to get access to a single movie
  const { movie } = useGetSingleMovie();

  // Show loading state?
  // Or go even further with isLoading and isError return values from useGetSingleMovie()
  /*   if (!movie) {
    return <></>
  } */

  // task 3: fetch cast and crew data
  const castData = movie ? movie.credits.cast : [];
  const crewData = movie ? movie.credits.crew : [];

  // task 4: console log the cast and crew data on the page
  console.log(castData);
  console.log(crewData);

  return (
    <>
      <div>
        <Header header="Cast & Crew" />
      </div>
      <Tab.Group>
        <Tab.List className="flex gap-6 text-sm font-medium">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-1 px-16 rounded-md ${
                  selected
                    ? ' bg-white-dimmed text-white border border-white'
                    : ' bg-dark-light text-white-dimmed'
                }`}
              >
                Cast
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? 'py-1 px-16 rounded-md bg-white-dimmed text-white border border-white'
                    : 'py-1 px-16 rounded-md bg-dark-light text-white-dimmed'
                }
              >
                Crew
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="mt-8">
              {castData.map(castMember => (
                <div
                  key={castMember.id + castMember.character}
                  className="flex gap-5 pb-4"
                >
                  <img
                    src={
                      castMember.profile_path
                        ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                        : 'https://i.pinimg.com/280x280_RS/da/2b/ba/da2bba6e54d8ef933f2c1921a56496a1.jpg' // find dummy image for a profile pic
                    }
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
          </Tab.Panel>
          <Tab.Panel>
            <div className="mt-8">
              {crewData.map(crewMember => (
                <div
                  key={crewMember.id + crewMember.job}
                  className="flex gap-5 pb-4"
                >
                  <img
                    src={
                      crewMember.profile_path
                        ? `https://image.tmdb.org/t/p/w500${crewMember.profile_path}`
                        : 'https://i.pinimg.com/280x280_RS/da/2b/ba/da2bba6e54d8ef933f2c1921a56496a1.jpg'
                    }
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
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default CastAndCrewPage;
