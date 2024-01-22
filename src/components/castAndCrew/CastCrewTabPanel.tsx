import { Crew, Cast, Personell } from '../../api/movies';

type PersonellList = Cast[] | Crew[];

interface Props {
  data: PersonellList;
}

// type guard is meant to determine if the passed 'data' is an array of Cast objects or Crew objects
// we don't need isCrewArray function because we are using ternary statement in CastCrewTabPanel to determine if isCastArray === true
// if it's false it can only be Crew[]
// ---> do the return statements make sense? <---
function isCastArray(data: PersonellList): data is Cast[] {
  return data.every(
    person =>
      (person as Cast).character !== undefined &&
      (person as Cast).id !== undefined
  );
}

function isCast(person: Cast | Crew): person is Cast {
  return (person as Cast).character !== undefined;
}

// functions to aggregate data
// Personell[] is return type (from movies.ts)
function aggregateData(data: Crew[] | Cast[]): Personell[] {
  // Record type for objects, in this case with string as key and Personell as value
  const resultDictionary: Record<string, Personell> = {};
  // look at each crew object and either write new object into dictionary or combine "new info" in already existing object
  for (const personell of data) {
    // check if crew name is already resultDictionary.
    if (resultDictionary[personell.name] !== undefined) {
      // wenn schon was da ist
      // then combine crew with data that is already in dictionary - push other jobs into object in existing dictionary
      // wenn isCast false ist, ist es of type Crew und job wird gepusht
      isCast(personell)
        ? resultDictionary[personell.name].positions.push(personell.character)
        : resultDictionary[personell.name].positions.push(personell.job);
    } else {
      // wenn name noch nicht vorhanden (daher else Block) - neu anlegen
      if (isCast(personell)) {
        // if-else statement bezogen auf isCast oder nicht
        const { id, name, profile_path, character } = personell;
        // use name of crew to add new entry to dictionary
        resultDictionary[personell.name] = {
          id,
          name,
          profile_path,
          positions: [character],
        };
      } else {
        const { id, name, profile_path, job } = personell;
        // use name of crew to add new entry to dictionary
        resultDictionary[personell.name] = {
          id,
          name,
          profile_path,
          positions: [job],
        };
      }
    }
  }

  // values sind hier ebenfalls Objekte of type Personell (siehe Record!)
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
