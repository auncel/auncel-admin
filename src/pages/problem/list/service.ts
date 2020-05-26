import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryProblem(params?: TableListParams) {
  return request.get('http://api.auncel.top/problem', {
    params,
    credentials: 'include',
  });
}

export async function removeProblem(params: { id: number }) {
  return request.delete('http://api.auncel.top/problem', {
    data: {
      ...params,
    },
  });
}

export async function addProblem(params: TableListParams) {
  return request.post('http://api.auncel.top/problem', {
    data: {
      ...params,
    },
  });
}

export async function updateProblem(params: TableListParams) {
  return request('http://api.auncel.top/problem', {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export async function querySatistics(params: { problemId: number }) {
  return request.get('http://api.auncel.top/problem/statistics', { params });
}
