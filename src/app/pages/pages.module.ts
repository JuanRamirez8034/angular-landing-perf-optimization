import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { SummaryComponent } from '../components/summary/summary.component';
import { SnippetsComponent } from '../components/snippets/snippets.component';
import { FeaturesComponent } from '../components/features/features.component';
import { StatsComponent } from '../components/stats/stats.component';
import { IntegrationsComponent } from '../components/integrations/integrations.component';
import { CustomersComponent } from '../components/customers/customers.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CalculateDatePeriodePipe } from '../pipes/calculate-date-periode.pipe';
import { PagesRoutingModule } from './pages-routing.module';
import { OptimizedImageModule } from '../optimized-image/optimized-image.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    SummaryComponent,
    SnippetsComponent,
    FeaturesComponent,
    StatsComponent,
    IntegrationsComponent,
    CustomersComponent,
    ContactComponent,
    HomeComponent,
    CalculateDatePeriodePipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    NgChartsModule,
    FontAwesomeModule,
    SwiperModule,

    OptimizedImageModule
  ]
})
export class PagesModule { }
