import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { QiutButtonComponent } from './qiut-button.component';

describe('QiutButtonComponent', () => {
  let component: QiutButtonComponent;
  let fixture: ComponentFixture<QiutButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QiutButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QiutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
