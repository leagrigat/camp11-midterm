import { Crew, Cast } from '../../api/movies';

// create a union type from the imported type, so that TS knows that the type Personell can either be of type Cast or of type Crew
type Personell = Cast | Crew;

interface PersonellListProps {
  data: Personell[];
}

// Type guard to check if a Personell is a Cast - typescript knows conversly if the person is crew if the funcition returns false
function isCast(person: Personell): person is Cast {
  return (person as Cast).character !== undefined;
}

function CastCrewTabPanel({ data }: PersonellListProps) {
  return (
    <div className="flex flex-col gap-4">
      {data.map(person => (
        <div
          key={person.id + (isCast(person) ? person.character : person.job)}
          className="flex gap-5"
        >
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
              {isCast(person) ? person.character : person.job}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CastCrewTabPanel;
