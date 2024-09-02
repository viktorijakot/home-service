import { fetchBusinessById, fetchBusinesses } from '@/api/businessesApi';
import { useQuery } from '@tanstack/react-query';
import { Business } from '../types/businesses';
import { useParams } from 'react-router-dom';

export const BUSINESS_KEY = 'BUSINESS';

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};

export const useBusinessById = (businessId: string) => {
  return useQuery<Business>({
    queryKey: [BUSINESS_KEY, businessId],
    queryFn: () => fetchBusinessById(businessId),
  });
};

const useCurrentBusiness = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useBusinessById(id!);

  return { currentBusiness: data };
};

export default useCurrentBusiness;
