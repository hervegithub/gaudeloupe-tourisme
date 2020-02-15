import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitGamePage } from './circuit-game.page';

describe('CircuitGamePage', () => {
  let component: CircuitGamePage;
  let fixture: ComponentFixture<CircuitGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
