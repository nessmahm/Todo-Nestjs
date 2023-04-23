import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  create(@Body() createCvDto: CreateCvDto) {
    return this.cvService.create(createCvDto);
  }
  @Post('insertcvs')
  createCvs() {
    return this.cvService.createCvs();
  }
    @Get('user')
    async findWithUsers():Promise<any>
    {
        return await this.cvService.JoinUsers();
    }
    @Get('skills')
    async findWithSkills():Promise<any>
    {
      return await this.cvService.JoinSkills();
    }
    @Get('countskills')

  async countkills():Promise<any>
  {
    return await this.cvService.countSkills();
  }
  @Get()
  findAll() {
    return this.cvService.findAll();
  }

  @Get('skill')
  findCvBySkill(@Query('skill') skill: string) {
    return this.cvService.findCvBySkill(skill);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvDto: UpdateCvDto) {
    return this.cvService.update(id, updateCvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvService.delete(id);
  }
}
