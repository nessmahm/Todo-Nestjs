import { AuthentifMiddleware } from './authentif.middleware';

describe('AuthentifMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthentifMiddleware()).toBeDefined();
  });
});
