

import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[selectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: RequiredSelectValidatorDirective,
        multi: true
    }]
})
export class RequiredSelectValidatorDirective implements Validator {
    @Input() selectValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.selectValidator ? { 'defaultSelected': true } : null;
    }
}



