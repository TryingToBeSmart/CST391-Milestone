import { Component, Input } from '@angular/core';
import { AllMedia } from '../models/all-media.model';

@Component({
  selector: 'app-display-all-media',
  templateUrl: './display-all-media.component.html',
  styleUrl: './display-all-media.component.css'
})
export class DisplayAllMediaComponent {
  addToUserMediaList(mediaItem: AllMedia) {
    console.log('Added to user media list:', mediaItem);
  }
  @Input() allMedia: AllMedia[] = [];
}
