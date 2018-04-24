import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { HttpClient } from '@angular/common/http';
import { routing } from './app-routing.module';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    InstitutionsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    FlashcardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [
    HttpClientModule,
    AuthGuard,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
