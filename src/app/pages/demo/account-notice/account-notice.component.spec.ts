import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountNoticeComponent } from './account-notice.component';

describe('AccountNoticeComponent', () => {
  let component: AccountNoticeComponent;
  let fixture: ComponentFixture<AccountNoticeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
