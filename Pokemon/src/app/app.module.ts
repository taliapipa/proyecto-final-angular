import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormModule } from './pages/form/form.module';
import { AppPipesModule } from './shared/pipes/app-pipes/app-pipes.module';
import { LoadingModule } from './shared/pipes/loading/loading.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/pipes/interceptor/loading.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FormModule,
    AppPipesModule,
    LoadingModule
  ],
  providers: [ServiceService,
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
