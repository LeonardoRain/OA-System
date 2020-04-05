import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadMessagesComponent } from './load-messages.component';

describe('LoadMessagesComponent', () => {
  let component: LoadMessagesComponent;
  let fixture: ComponentFixture<LoadMessagesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
