import { RegisterComponent } from './register.component';
import { FormBuilder } from '@angular/forms';
import { DataholderService } from '../dataholder.service';

describe('RegisterComponent', () => {
  it('should create an instance', () => {
    let registerComponent: RegisterComponent = new RegisterComponent(this.formBuilder,this.dataholderService);
    expect(registerComponent.bankData).toBeUndefined();
  });
});