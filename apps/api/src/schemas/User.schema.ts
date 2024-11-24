import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields automatically
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  user_img?: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Date, default: () => new Date().toJSON() })
  joiningDate: Date;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ required: true, enum: ['admin', 'vendor', 'customer'] })
  user_type: 'admin' | 'vendor' | 'customer';

  @Prop({ type: Types.ObjectId, ref: 'Vendor' }) // Reference to Vendor collection
  vendor_id?: Types.ObjectId;

  @Prop({ default: false })
  is_vendor_active: boolean;
}

// Generate the Mongoose schema
export const UserSchema = SchemaFactory.createForClass(User);
