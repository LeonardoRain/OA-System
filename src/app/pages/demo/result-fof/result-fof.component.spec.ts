import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultFofComponent } from './result-fof.component';

describe('ResultFofComponent', () => {
  let component: ResultFofComponent;
  let fixture: ComponentFixture<ResultFofComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultFofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
