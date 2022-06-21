import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CommunityIdValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return parseInt(value);
  }
}
