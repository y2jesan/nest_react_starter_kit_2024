import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields automatically
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // @Prop({ type: Date, default: () => new Date().toJSON() })
  // joiningDate: Date;

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: true, enum: ['admin', 'vendor', 'customer'] })
  user_role: 'admin' | 'vendor' | 'customer';
}

// Generate the Mongoose schema
export const UserSchema = SchemaFactory.createForClass(User);
