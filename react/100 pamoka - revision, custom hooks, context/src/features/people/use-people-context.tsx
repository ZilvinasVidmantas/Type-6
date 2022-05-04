import { useContext } from 'react';
import PeopleContext from './people-context';

const usePeopleContext = () => useContext(PeopleContext);

export default usePeopleContext;
