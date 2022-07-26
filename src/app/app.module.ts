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
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgImageSliderModule } from 'ng-image-slider';
import { SwiperModule } from 'swiper/angular';
import { NewArrivalsComponent } from './pages/home/new-arrivals/new-arrivals.component';
import { MatCardModule } from '@angular/material/card';
import { OccasionsComponent } from './pages/home/occasions/occasions.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { ReadyToShipComponent } from './pages/home/ready-to-ship/ready-to-ship.component';
import { GridListComponent } from './components/common/grid-list/grid-list.component';
import { TrendingComponent } from './pages/home/trending/trending.component';
import { BestSellersComponent } from './pages/home/best-sellers/best-sellers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { IndividualProductDetailComponent } from './components/individual-product-detail/individual-product-detail.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

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
    BestSellersComponent,
    LoginComponent,
    SignUpComponent,
    IndividualProductDetailComponent,
    ProductDetailsComponent,
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
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HotToastModule.forRoot(),
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
