import { Crew } from '../api/movies';

export function findCrewByRole(crew: Crew[], rolename) {
  const member = informationsFilm.find(crewMember => {
    if (crewMember.job === 'Director') {
      console.log(crewMember.name);
      return crewMember.name;
    }
  });

  return member;
}
