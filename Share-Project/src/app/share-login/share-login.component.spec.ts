import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLoginComponent } from './share-login.component';

describe('ShareLoginComponent', () => {
  let component: ShareLoginComponent;
  let fixture: ComponentFixture<ShareLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
