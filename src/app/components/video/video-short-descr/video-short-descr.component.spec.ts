import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShortDescrComponent } from './video-short-descr.component';

describe('VideoShortDescrComponent', () => {
  let component: VideoShortDescrComponent;
  let fixture: ComponentFixture<VideoShortDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoShortDescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoShortDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
