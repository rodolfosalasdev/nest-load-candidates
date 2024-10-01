export abstract class CreateCandidateRepository {
  abstract create(name: string, surname: string, file: any): Promise<void>;
}
