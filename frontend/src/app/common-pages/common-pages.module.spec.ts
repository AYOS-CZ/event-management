import { CommonPagesModule } from './common-pages.module';

describe('CommonPagesModule', () => {
  let commonPagesModule: CommonPagesModule;

  beforeEach(() => {
    commonPagesModule = new CommonPagesModule();
  });

  it('should create an instance', () => {
    expect(commonPagesModule).toBeTruthy();
  });
});
