import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

export function useQuery() {
    return parse(useLocation()?.search?.replace('?', '') ?? '');
}
