import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as config from 'config';
import { Strategy } from 'passport-kakao';
import { UserOauthDto } from '../dto/user.oauth.dto';
import { providerType } from '../user-provider.enum';

const kakaoConfig = config.get('kakao');

@Injectable()
export class kakaoStragety extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENTID || kakaoConfig.clientID,
      callbackURL: process.env.KAKAO_CALLBACKURL || kakaoConfig.callbackURL,
    });
  }

  async validate(accessToken: string, profile, done) {
    try {
      const { nickname, kakaoUserInfo, id } = profile;

      const password = String(id);
      const data: UserOauthDto = {
        username: nickname,
        password,
        provider: providerType.KAKAO,
        email: kakaoUserInfo?.email,
        accessToken,
      };
      done(null, data);
    } catch (error) {
      done(error, null);
    }
  }
}
