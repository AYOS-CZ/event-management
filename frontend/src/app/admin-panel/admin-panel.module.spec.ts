import { AdminPanelModule } from './admin-panel.module';

describe('AdminPanelModule', () => {
  let adminPanelModule: AdminPanelModule;

  beforeEach(() => {
    adminPanelModule = new AdminPanelModule();
  });

  it('should create an instance', () => {
    expect(adminPanelModule).toBeTruthy();
  });
});
