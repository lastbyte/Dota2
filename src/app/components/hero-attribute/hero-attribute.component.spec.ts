import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAttributeComponent } from './hero-attribute.component';

describe('HeroAttributeComponent', () => {
  let component: HeroAttributeComponent;
  let fixture: ComponentFixture<HeroAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
