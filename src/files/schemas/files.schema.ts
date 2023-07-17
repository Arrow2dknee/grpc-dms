import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

import { User } from '../../users/schemas/users.schema';
import { Folder } from '../../folders/schemas/folders.schema';
import { Permission } from '../../common/enums/permissions.enum';

export type FileDocument = HydratedDocument<File>;

@Schema({
  timestamps: true,
})
export class File {
  @Prop({ type: String, required: true, trim: true })
  name: string;

  @Prop({ type: String, required: true, trim: true })
  extension: string;

  @Prop({ type: Buffer, default: null })
  content: Buffer;

  @Prop({ type: String, enum: Permission, default: Permission.Execute })
  permissions: Permission;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Folder', default: null })
  folderId: Folder;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', default: null })
  userId: User;
}

export const FileSchema = SchemaFactory.createForClass(File);
