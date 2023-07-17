import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { File, FileDocument } from './schemas/files.schema';

export class FilesRepository {
  constructor(
    @InjectModel(File.name) private readonly filesModel: Model<FileDocument>,
  ) {}
}
