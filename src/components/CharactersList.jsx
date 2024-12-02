import { Link } from "react-router-dom";
import { format } from "date-fns";
import { formatDate } from '../fonction/fonction_date';

export function CharactersList({ characters = [] }) {
  return (
    <ul id="characters">
      {characters.map((character) => {
        
        return (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
            <strong>{character.name}</strong> <small>- {formatDate(character.modified)}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
