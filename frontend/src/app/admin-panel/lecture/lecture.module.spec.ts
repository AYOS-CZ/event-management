import { LectureModule } from './lecture.module';

describe('LectureModule', () => {
  let lectureModule: LectureModule;

  beforeEach(() => {
    lectureModule = new LectureModule();
  });

  it('should create an instance', () => {
    expect(lectureModule).toBeTruthy();
  });
});
