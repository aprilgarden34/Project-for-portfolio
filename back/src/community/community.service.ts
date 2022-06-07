import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Community } from 'src/entities/community.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';

@Injectable()
export class CommunityService {
  constructor(
    @Inject('COMMUNITY_REPOSITORY')
    private communityRepository: Repository<Community>, // private jwtService: JwtService,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}
  async create(
    user_id: number,
    createCommunityDto: CreateCommunityDto,
  ): Promise<Community> {
    const { photo_url, title, description } = createCommunityDto;

    const nowDate = new Date();

    const user = await this.userRepository.findOne({
      where: { id: user_id },
      relations: ['community'],
    });

    const community = await this.communityRepository.create({
      photo_url,
      title,
      description,
      createdAt: nowDate.toLocaleString(),
    });
    console.log(community);
    try {
      await this.communityRepository.save(community);
      user.community.push(community);
      await this.userRepository.save(user);

      return community;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
