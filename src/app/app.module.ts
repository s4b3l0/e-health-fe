import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbButtonModule,
  NbDialogService, NbDialogModule, NbActionsModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {PagesModule} from "./pages/pages.module";
import {UtilModule} from "./util/util.module";
import {LoggedInModule} from "./pages/logged-in-pages/logged-in.module";
import {ShareComponentsModule} from "./share-components/share-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    LoggedInModule,
    NbDialogModule.forRoot(),
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule,
    NbButtonModule,
    PagesModule,
    UtilModule,
    NbActionsModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
