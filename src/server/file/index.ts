
import { post, get, postForm } from '@/server/index';
import { objectToFormData } from '@/utils'
import type { 
} from './interface';

export const downExcel = () => {
  return get<null, null>('http://192.168.31.99:8082/down-excel')
}
