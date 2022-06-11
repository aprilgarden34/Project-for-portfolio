import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { providerType } from '../user-provider.enum';
import { UserOauthDto } from '../dto/user.oauth.dto';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
      callbackURL: process.env.GOOGLE_CALLBACKURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    // refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, id } = profile;
    const password = String(id);
    const data: UserOauthDto = {
      username: name.givenName + name.familyName,
      password,
      provider: providerType.GOOGLE,
      email: emails[0].value,
      accessToken,
      //   refreshToken,
    };
    done(null, data);
  }
}
