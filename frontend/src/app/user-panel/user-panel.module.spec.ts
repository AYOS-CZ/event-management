import { UserPanelModule } from './user-panel.module';

describe('UserPanelModule', () => {
  let userPanelModule: UserPanelModule;

  beforeEach(() => {
    userPanelModule = new UserPanelModule();
  });

  it('should create an instance', () => {
    expect(userPanelModule).toBeTruthy();
  });
});
