import { getUniqueId } from '@shared/lib';
import { Company } from '../model/types';

export function convertCompany({ name, address }: { name: string; address: string }): Company {
  return {
    id: getUniqueId('company'),
    name,
    address,
    employeesCount: 0,
  };
}
