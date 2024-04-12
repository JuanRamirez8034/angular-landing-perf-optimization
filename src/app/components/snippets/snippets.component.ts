import { Component } from '@angular/core';
import { IntersectionStatus } from 'src/app/directives/from-intersection-observer';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss'],
})
export class SnippetsComponent {
  public status : IntersectionStatus = IntersectionStatus.NotVisible;

  constructor() {}

  public onVisibilityChanged(status: IntersectionStatus) {
    this.status = status;
  }
}
