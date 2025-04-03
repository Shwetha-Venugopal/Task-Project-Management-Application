import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeatailComponent } from './task-deatail.component';

describe('TaskDeatailComponent', () => {
  let component: TaskDeatailComponent;
  let fixture: ComponentFixture<TaskDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
