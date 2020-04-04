import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderContentComponent } from './page-header-content.component';

describe('PageHeaderContentComponent', () => {
  let component: PageHeaderContentComponent;
  let fixture: ComponentFixture<PageHeaderContentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
