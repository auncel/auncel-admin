import request from 'umi-request';
import { message } from 'antd';
import { BasicListItemDataType } from './data';

interface ParamsType extends Partial<BasicListItemDataType> {
  count?: number;
}

export async function queryFakeList(params: ParamsType) {
  const resp = await request('http://api.auncel.top/user/list', {
    params,
    credentials: 'include',
  });
  if (!resp.success) {
    message.error(resp.msg);
  }
  return resp;
}

export async function removeFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
    },
    credentials: 'include',
  });
}

export async function addFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
    },
    credentials: 'include',
  });
}

export async function updateFakeList(params: ParamsType) {
  const { count = 5, ...restParams } = params;
  return request('http://api.auncel.top/user/list', {
    method: 'POST',
    params: {
      count,
    },
    data: {
      ...restParams,
    },
    credentials: 'include',
  });
}
