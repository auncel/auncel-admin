import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryProblem(params?: TableListParams) {
  return request.get('http://api.auncel.top/problem', {
    params,
    credentials: 'include',
  });
}

export async function queryContest(params?: TableListParams) {
  return request.get('http://api.auncel.top/contest/getByMaker', {
    params,
    credentials: 'include',
  });
}

export async function removeContest(params: { key: number[] }) {
  return request('http://api.auncel.top/contest', {
    method: 'DELETE',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}

export async function addContest(params: TableListParams) {
  return request('http://api.auncel.top/contest', {
    method: 'POST',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}

export async function updateContest(params: TableListParams) {
  return request('http://api.auncel.top/contest', {
    method: 'PUT',
    data: {
      ...params,
    },
    credentials: 'include',
  });
}
