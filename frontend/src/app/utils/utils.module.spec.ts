import { UtilsModule } from './utils.module';

describe('CommonPagesModule', () => {
  let commonPagesModule: UtilsModule;

  beforeEach(() => {
    commonPagesModule = new UtilsModule();
  });

  it('should create an instance', () => {
    expect(commonPagesModule).toBeTruthy();
  });
});
