import { Crew, Cast, Personell } from '../../api/movies';

type PersonellList = Cast[] | Crew[];

interface Props {
  data: PersonellList;
}

// to determine if person is of type cast
function isCast(person: Cast | Crew): person is Cast {
  return (person as Cast).character !== undefined; // when character is defined person is of type Cast
  // we use as Cast to tell TS that person is definitely of type Cast to be able to check the character field
}

function aggregateData(data: Crew[] | Cast[]): Personell[] {
  // Record type for objects, in this case with string as key and Personell as value
  const resultDictionary: Record<string, Personell> = {};

  for (const personell of data) {
    // check if personell.name is already in resultDictionary
    if (resultDictionary[personell.name] !== undefined) {
      // if it's already there push incoming jobs/character into existing object
      // when isCast is true, it's of type Cast and character gets pushed in the positions array - otherwise it's of type Crew and job gets pushed
      isCast(personell)
        ? resultDictionary[personell.name].positions.push(personell.character)
        : resultDictionary[personell.name].positions.push(personell.job);
    } else {
      // if personell.name isn't yet availabe, create a new entry
      if (isCast(personell)) {
        // if-else finds out whether we need to create a Cast or a Crew object
        const { id, name, profile_path, character } = personell;
        resultDictionary[personell.name] = {
          id,
          name,
          profile_path,
          positions: [character],
        };
      } else {
        // otherwise we create Crew object
        const { id, name, profile_path, job } = personell;
        resultDictionary[personell.name] = {
          id,
          name,
          profile_path,
          positions: [job],
        };
      }
    }
  }

  // we want to return the values of our resultDictionary object - those values are of type Personell, so an object itself
  return Object.values(resultDictionary);
}

function CastCrewTabPanel({ data }: Props) {
  const aggregatedData = aggregateData(data);

  return (
    <div className="flex flex-col gap-4">
      {aggregatedData.map(person => (
        <div key={person.id} className="flex gap-5">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                : 'https://i.pinimg.com/280x280_RS/da/2b/ba/da2bba6e54d8ef933f2c1921a56496a1.jpg' // Placeholder image
            }
            alt={person.name}
            className="h-[64px] w-[64px] object-cover"
          />
          <div>
            <h3 className="text-white text-sm">{person.name}</h3>
            <p className="text-white-dimmed text-xs">
              {person.positions.join(', ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CastCrewTabPanel;
