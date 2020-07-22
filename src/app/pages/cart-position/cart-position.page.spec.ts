import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartPositionPage } from './cart-position.page';

describe('CartPositionPage', () => {
  let component: CartPositionPage;
  let fixture: ComponentFixture<CartPositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
