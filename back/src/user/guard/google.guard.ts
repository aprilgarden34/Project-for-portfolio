import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class GoogleGuard extends AuthGuard('google') {}

export const GoogleAuth = () => UseGuards(GoogleGuard);
