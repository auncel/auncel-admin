import request from 'umi-request';

export interface LoginParamsType {
  userName: string;
  email: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('http://api.auncel.top/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`http://api.auncel.top/user/login/captcha?mobile=${mobile}`);
}
