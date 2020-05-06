import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request.get('http://api.auncel.top/problem', {
    params,
    credentials: 'include',
  });
}

export async function removeRule(params: { id: number }) {
  return request.delete('http://api.auncel.top/problem', {
    data: {
      ...params,
    },
  });
}

export async function addRule(params: TableListParams) {
  return request.post('http://api.auncel.top/problem', {
    data: {
      ...params,
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('http://api.auncel.top/problem', {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
