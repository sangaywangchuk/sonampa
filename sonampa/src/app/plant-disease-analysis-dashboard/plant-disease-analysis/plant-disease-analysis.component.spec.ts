import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDiseaseAnalysisComponent } from './plant-disease-analysis.component';

describe('PlantDiseaseAnalysisComponent', () => {
  let component: PlantDiseaseAnalysisComponent;
  let fixture: ComponentFixture<PlantDiseaseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDiseaseAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDiseaseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
