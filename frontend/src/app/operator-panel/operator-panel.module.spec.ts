import { OperatorPanelModule } from './operator-panel.module';

describe('OperatorModule', () => {
  let operatorModule: OperatorPanelModule;

  beforeEach(() => {
    operatorModule = new OperatorPanelModule();
  });

  it('should create an instance', () => {
    expect(operatorModule).toBeTruthy();
  });
});
