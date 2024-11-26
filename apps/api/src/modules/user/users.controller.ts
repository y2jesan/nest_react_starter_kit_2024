import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValidId = Types.ObjectId.isValid(id);
    if (!isValidId) throw new HttpException('User not found', 404);
    const user = await this.userService.getUserById(id);
    if (!user) throw new HttpException('User not found', 404);
    return user;
  }
}
