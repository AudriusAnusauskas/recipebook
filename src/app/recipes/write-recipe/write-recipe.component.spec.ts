import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteRecipeComponent } from './write-recipe.component';

describe('WriteRecipeComponent', () => {
  let component: WriteRecipeComponent;
  let fixture: ComponentFixture<WriteRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
