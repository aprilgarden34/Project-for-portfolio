import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as config from 'config';

// TODO: refresh Guard 위한 Strategy 생성
// super에서 만료된 access_token을 받아도 무시하고 validate 함수 실행하게 하는 옵션 추가
@Injectable()
export class JWTRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {
    super({
      secretOrKey: config.get('jwt').secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
    });
  }

  // access_token 만료시, refresh_token 재발급
  // access_token에 있는 사용자 id를 추출하여 refresh 유효한지 확인
  // refresh 유효한 경우엔 access_token 재발급
  // 만료된 경우엔 재로그인하도록 유도
  async validate(payload: any) {
    console.log(payload);
    const { username } = payload;
    const user: User = await this.userRepository.findOne({
      where: { username },
    });

    // 지금은 DB에만 들어가있어서 user 확인후 로직 진행

    // user가 없다면 refresh token도 없다는 뜻이기 때문에 재로그인하도록 유도
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
