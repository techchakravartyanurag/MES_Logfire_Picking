import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemPickLocationPage } from './item-pick-location.page';

describe('ItemPickLocationPage', () => {
  let component: ItemPickLocationPage;
  let fixture: ComponentFixture<ItemPickLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPickLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPickLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
