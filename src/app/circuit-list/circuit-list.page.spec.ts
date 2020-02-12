import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitListPage } from './circuit-list.page';

describe('CircuitListPage', () => {
  let component: CircuitListPage;
  let fixture: ComponentFixture<CircuitListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
