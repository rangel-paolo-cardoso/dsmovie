import { Link, useParams } from 'react-router-dom';
import FormCard from '../../components/FormCard';
import { Movie } from 'types/Movie';

export default function Form() {

  const params = useParams();

  return (
    <FormCard movieId={`${params.movieId}`} />
  );
}
