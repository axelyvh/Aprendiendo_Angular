import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Tier } from '../../types/tier.type';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() tier: Tier;
  @Input() color: string;

  constructor() {
    console.log('[SpinnerComponent] [constructor]', this.tier);
  }

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      console.log('[SpinnerComponent] [LOG] scroll actualizado');
    });
    console.log('[SpinnerComponent] [ngOnInit]', this.tier);
    this.updateTextColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[SpinnerComponent] [ngOnChanges]', changes);
    if (changes.tier?.currentValue) {
      this.updateTextColor();
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', () => {
      console.log('[SpinnerComponent] [LOG] scroll eliminado');
    });
    console.log('[SpinnerComponent] [ngOnDestroy]');
  }

  updateTextColor(): void {
    switch (this.tier) {
      case 'warning':
      case 'light':
      case 'info':
        console.log('[SpinnerComponent] [LOG] cambiar el texto al color text-dark');
        break;
      default:
        console.log('[SpinnerComponent] [LOG] cambiar el texto al color text-light');
    }
  }
}
