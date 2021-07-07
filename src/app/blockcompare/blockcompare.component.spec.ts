import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockcompareComponent } from './blockcompare.component';

describe('BlockcompareComponent', () => {
  let component: BlockcompareComponent;
  let fixture: ComponentFixture<BlockcompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockcompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
