import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import {SanitizeHtmlPipe} from './pipes/sanitize-html-pipe.pipe';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './layouts/common/header/header.component';
import { SectionComponent } from './layouts/common/section/section.component';
import { FooterComponent } from './layouts/common/footer/footer.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { ListComponent } from './layouts/pages/list/list.component';
import { DetailComponent } from './layouts/pages/detail/detail.component';
import { CreateComponent } from './layouts/pages/create/create.component';
import { EditComponent } from './layouts/pages/edit/edit.component';
import { NavbarComponent } from './layouts/common/navbar/navbar.component';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    DefaultComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
