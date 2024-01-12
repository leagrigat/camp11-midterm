import { Crew } from '../api/movies';

export function findCrewByRole(crew: Crew[], rolename: string) {
  const person = crew.find(crewMember => {
    if (crewMember.job === rolename) {
      return true;
    }
  });

  return person;
}
