import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request.get('http://api.auncel.top/contest/getByMaker', {
    params,
    credentials: 'include',
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'DELETE',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'PUT',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}
