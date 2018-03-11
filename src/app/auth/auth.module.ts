import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NbAuthSimpleInterceptor, NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    {
      provide: NB_AUTH_TOKEN_WRAPPER_TOKEN,
      useClass: NbAuthJWTToken,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthSimpleInterceptor,
      multi: true,
    },
  ]
})
export class AuthModule { }