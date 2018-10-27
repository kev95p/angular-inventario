import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
 
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantillaModule } from './modules/plantilla/plantilla.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CardService } from './services/card.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtInterceptor } from 'app/utils/jwt.interceptor';
import { ErrorInterceptor } from 'app/utils/error.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from "./services/user.service";
import { ProductsService } from './services/products.service';
import { ProductsModule } from './modules/products/products.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PlantillaModule,
    ProductsModule,
    DashboardModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CardService,
    AuthService,
    UserService,
    ProductsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
