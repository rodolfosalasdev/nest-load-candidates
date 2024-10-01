import { IsNotEmpty } from 'class-validator';

export class CreateCandidateBody {
  @IsNotEmpty({
    message: 'The name should not be empty.',
  })
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  file: any;
}
