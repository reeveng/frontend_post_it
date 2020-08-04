
// @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxTypedJsModule } from 'ngx-typed-js';

// components / pages
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { LogoComponent } from './components/logo/logo.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

// http-interceptor
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    PostComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CommentsComponent,
    AddCommentComponent,
    LogoComponent,
    AddPostComponent,
    // UserFilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxTypedJsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
