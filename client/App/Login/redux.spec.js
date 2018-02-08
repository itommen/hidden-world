import reducer, { login } from './redux';

describe('test login action', () => {
  test('login without data', () => {
    const result = login();

    expect(result.type).toBe('LOGIN');

    const { data, method, url } = result.payload.request;
    expect(data).toEqual({
      userName: undefined,
      password: undefined
    });
    expect(method).toBe('POST');
    expect(url).toBe('/user/login');
  });

  test('login action without password', () => {
    const result = login({
      userName: 'test1'
    });

    expect(result.type).toBe('LOGIN');

    const { data, method, url } = result.payload.request;
    expect(data).toEqual({
      userName: 'test1',
      password: undefined
    });
    expect(method).toBe('POST');
    expect(url).toBe('/user/login');
  });

  test('login action without userName', () => {
    const result = login({
      password: 'test1'
    });

    expect(result.type).toBe('LOGIN');

    const { data, method, url } = result.payload.request;
    expect(data).toEqual({
      userName: undefined,
      password: 'test1'
    });
    expect(method).toBe('POST');
    expect(url).toBe('/user/login');
  });

  test('login action happy flow', () => {
    const result = login({
      userName: 'testName',
      password: 'testPass'
    });

    expect(result.type).toBe('LOGIN');

    const { data, method, url } = result.payload.request;
    expect(data).toEqual({
      userName: 'testName',
      password: 'testPass'
    });
    expect(method).toBe('POST');
    expect(url).toBe('/user/login');
  });
});

describe('login reducers', () => {
  test('should return internal state', () => {
    expect(reducer({}, {})).toEqual({});
    expect(reducer(undefined, { type: 'doesntmatter' })).toEqual({});
  });
})