import { IsNotEmpty } from 'class-validator';

export class CreateCandidateBody {
  @IsNotEmpty({
    message: 'The name should not be empty.',
  })
  name: string;

  @IsNotEmpty()
  surname: string;

  seniority: string;

  years: number;

  availability: boolean;

  file: any;
}
