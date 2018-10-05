import {HttpClientModule} from '@angular/common/http';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_CHECKBOX_CLICK_ACTION,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MyDialogComponent} from './components/main/my-dialog/my-dialog.component';
import {ProductsComponent} from './components/main/products/products.component';
import {FilterComponent} from './components/main/filter/filter.component';
import {TableComponent} from './components/main/table/table.component';
import {UserService} from './components/main/table/table.service';
import {AdminComponent} from './components/admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/main/home.component';
import { OrderInfoComponent } from './components/admin/order-info/order-info.component';
import { CartComponent } from './components/main/cart/cart.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {isPlatformBrowser} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ]
})
export class DemoMaterialModule {}

  @NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    ProductsComponent,
    TableComponent,
    FilterComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    OrderInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-demystified'
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
