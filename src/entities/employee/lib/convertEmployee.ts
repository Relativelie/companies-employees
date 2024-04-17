import { getUniqueId } from '@shared/lib';
import { Employee } from '../model/types';

export function convertEmployee(data: Partial<Employee>): Employee {
  const { firstName, lastName, position, companyId } = data;
  return {
    id: getUniqueId('employee'),
    firstName: firstName || '',
    lastName: lastName || '',
    position: position || '',
    companyId: companyId || '',
  };
}
