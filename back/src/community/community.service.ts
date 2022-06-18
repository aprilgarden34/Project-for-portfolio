import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Community } from 'src/entities/community.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { DeleteCommunityDto } from './dto/delete-community.dto';

@Injectable()
export class CommunityService {
  constructor(
    @Inject('COMMUNITY_REPOSITORY')
    private communityRepository: Repository<Community>, // private jwtService: JwtService,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  // TODO: form-data 이미지 설정
  async create(
    user_id: string,
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
      userId: user_id,
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

  async deleteOne(deleteCommunityDto: DeleteCommunityDto): Promise<void> {
    const id = deleteCommunityDto.id;
    const community = await this.communityRepository.delete(id);

    if (community.affected === 0) {
      throw new NotFoundException(`ID가 ${id}인 게시글이 존재하지 않습니다.`);
    }
  }

  async findAll(): Promise<Community[]> {
    const community = await this.communityRepository.find({
      relations: ['user_id'],
    });

    return community;
  }

  // TODO: 좋아요 수정 기능
  // 테이블에 communityId, userId 모두 존재하면 삭제, 아니라면 추가
  //async updateLike(communityId: string, userId: string) {}
}
