import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DescComponent } from './desc.component';

describe('DescComponent', () => {
  let component: DescComponent;
  let fixture: ComponentFixture<DescComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
