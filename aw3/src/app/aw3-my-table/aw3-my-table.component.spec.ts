
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aw3MyTableComponent } from './aw3-my-table.component';

describe('Aw3MyTableComponent', () => {
  let component: Aw3MyTableComponent;
  let fixture: ComponentFixture<Aw3MyTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Aw3MyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aw3MyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
