import { Component } from '@angular/core';
import { IntersectionStatus } from 'src/app/directives/from-intersection-observer';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  public status : IntersectionStatus = IntersectionStatus.NotVisible;

  constructor() {}

  public onVisibilityChanged(status: IntersectionStatus) {
    console.log(status);
    
    this.status = status;
  }
}
