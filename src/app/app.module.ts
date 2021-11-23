import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCardComponent } from './project-section/project-card/project-card.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { CopyPopupComponent } from './shared/copy-popup/copy-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectSectionComponent,
    HeroSectionComponent,
    ProjectCardComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    CopyPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
