import Header from '../components/Header';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import { Tab } from '@headlessui/react';
import CastCrewTab from '../components/castAndCrew/CastCrewTab';
import CastCrewTabPanel from '../components/castAndCrew/CastCrewTabPanel';

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
          <CastCrewTab>Cast</CastCrewTab>
          <CastCrewTab>Crew</CastCrewTab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <CastCrewTabPanel data={castData}></CastCrewTabPanel>
          </Tab.Panel>
          <Tab.Panel>
            <CastCrewTabPanel data={crewData}></CastCrewTabPanel>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default CastAndCrewPage;
