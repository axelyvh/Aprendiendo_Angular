import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioGroupOption } from './radio-group.interface';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioGroupComponent,
      multi: true
    }
  ]
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() options: RadioGroupOption[] = [];

  value: string;
  isDisabled: boolean;
  onTouched: () => void;
  onChange: (value: string) => void;

  touched = false;

  onSelect(): void {
    this.onChange(this.value);
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
