import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { providerType } from '../user/user-provider.enum';

export class UserProviderValidationPipe implements PipeTransform {
  readonly TypeOptions = [
    providerType.SIM,
    providerType.KAKAO,
    providerType.GOOGLE,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isTypeValid(value)) {
      throw new BadRequestException(`${value} isn't in the login provider`);
    }
    return value;
  }

  private isTypeValid(type: any) {
    const index = this.TypeOptions.indexOf(type);
    return index !== -1;
  }
}
