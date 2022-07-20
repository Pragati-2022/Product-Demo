import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageSliderComponent } from './pages/home/image-slider/image-slider.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgImageSliderModule } from 'ng-image-slider';
import { SwiperModule } from 'swiper/angular';
import { NewArrivalsComponent } from './pages/home/new-arrivals/new-arrivals.component';
import {MatCardModule} from '@angular/material/card';
import { OccasionsComponent } from './pages/home/occasions/occasions.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { ReadyToShipComponent } from './pages/home/ready-to-ship/ready-to-ship.component';
import { GridListComponent } from './components/common/grid-list/grid-list.component';
import { TrendingComponent } from './pages/home/trending/trending.component';
import { BestSellersComponent } from './pages/home/best-sellers/best-sellers.component'; 

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImageSliderComponent,
    NewArrivalsComponent,
    OccasionsComponent,
    HomeComponent,
    CategoryComponent,
    ReadyToShipComponent,
    GridListComponent,
    TrendingComponent,
    BestSellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    NgImageSliderModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SwiperModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
