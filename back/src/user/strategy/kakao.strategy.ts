import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as config from 'config';
import { Strategy } from 'passport-local';
import { UserKakaoDto } from '../dto/user.kakao.dto';

const kakaoConfig = config.get('kakao');

@Injectable()
export class kakaoStragety extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENTID || kakaoConfig.clientID,
      callbackURL: process.env.KAKAO_CALLBACKURL || kakaoConfig.callbackURL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    const profileJson = profile._json;
    const kakao_account = profileJson.kakao_account;
    const payload: UserKakaoDto = {
      username: kakao_account.profile.nickname,
      password: profileJson.id,
      email:
        kakao_account.has_email && !kakao_account.email_needs_agreement
          ? kakao_account.email
          : null,
      accessToken,
    };
    done(null, payload);
  }
}
