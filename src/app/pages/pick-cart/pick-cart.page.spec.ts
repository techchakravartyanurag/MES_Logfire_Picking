import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickCartPage } from './pick-cart.page';

describe('PickCartPage', () => {
  let component: PickCartPage;
  let fixture: ComponentFixture<PickCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
