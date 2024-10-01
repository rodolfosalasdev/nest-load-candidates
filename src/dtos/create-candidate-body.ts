import { IsNotEmpty } from 'class-validator';

export class CreateCandidateBody {
  @IsNotEmpty({
    message: 'The field name should not be empty.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The field surname should not be empty.',
  })
  surname: string;

  @IsNotEmpty({
    message: 'The field file should not be empty.',
  })
  file: any;
}
