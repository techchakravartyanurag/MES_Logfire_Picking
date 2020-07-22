import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemContainersPage } from './item-containers.page';

describe('ItemContainersPage', () => {
  let component: ItemContainersPage;
  let fixture: ComponentFixture<ItemContainersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContainersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemContainersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
