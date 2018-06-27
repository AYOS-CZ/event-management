import { OperatorModule } from './operator.module';

describe('OperatorModule', () => {
  let operatorModule: OperatorModule;

  beforeEach(() => {
    operatorModule = new OperatorModule();
  });

  it('should create an instance', () => {
    expect(operatorModule).toBeTruthy();
  });
});
