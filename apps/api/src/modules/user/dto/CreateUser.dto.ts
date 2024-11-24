import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsPhoneNumber('BD', { message: 'Please provide a valid Bangladeshi phone number.' })
  phone: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email: string;

  @IsStrongPassword(
    {
      minLength: 6,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 0, // No symbols required
    },
    {
      message: 'Password must be at least 6 characters long, include 1 uppercase letter, 1 lowercase letter, and 1 number.',
    }
  )
  password: string;

  @IsString()
  user_role: string;
}
