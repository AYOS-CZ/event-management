import { SharedModule } from './shared.module';

describe('CommonModule', () => {
  let commonModule: SharedModule;

  beforeEach(() => {
    commonModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
