import request from 'umi-request';
import { message } from 'antd';
import { BasicListItemDataType } from './data';

interface ParamsType extends Partial<BasicListItemDataType> {
  count?: number;
}

export async function queryFakeList() {
  let resp;
  try {
    resp = await request('http://api.auncel.top/user/list', {
      credentials: 'include',
    });

    if (!resp.success) {
      message.error(resp.msg);
    }
    return resp;
  } catch (err) {
    message.error(err.toString());
    return resp;
  }
}

export async function removeFakeList(params: ParamsType) {
  const { ...restParams } = params;
  return request('/api/fake_list', {
    method: 'POST',
    data: {
      ...restParams,
    },
    credentials: 'include',
  });
}

export async function addFakeList(params: ParamsType) {
  let resp;
  try {
    resp = await request('http://api.auncel.top/user/admin', {
      method: 'POST',
      data: {
        ...params,
      },
      credentials: 'include',
    });

    if (!resp.success) {
      message.error(resp.msg);
    }
    return resp;
  } catch (err) {
    message.error(err.toString());
    return resp;
  }
}

export async function updateFakeList(params: ParamsType) {
  let resp;
  try {
    resp = await request('http://api.auncel.top/user/u/profile', {
      method: 'PUT',
      data: {
        ...params,
      },
      credentials: 'include',
    });

    if (!resp.success) {
      message.error(resp.msg);
    }
    return resp;
  } catch (err) {
    message.error(err.toString());
    return resp;
  }
}
