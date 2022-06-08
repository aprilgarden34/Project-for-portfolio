import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as config from 'config';
import { Strategy } from 'passport-local';
import { UserKakaoDto } from '../dto/user.kakao.dto';

@Injectable()
export class kakaoStragety extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENTID || config.get('kakao').clientID,
      callbackURL:
        process.env.KAKAO_CALLBACKURL || config.get('kakao').callbackURL,
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
