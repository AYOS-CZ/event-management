import { HealingModule } from './healing.module';

describe('HealingModule', () => {
  let healingModule: HealingModule;

  beforeEach(() => {
    healingModule = new HealingModule();
  });

  it('should create an instance', () => {
    expect(healingModule).toBeTruthy();
  });
});
