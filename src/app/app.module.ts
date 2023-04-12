import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {defineCustomElements} from '@profabric/web-components/loader';
import { SidebarSearchComponent } from '@components/sidebar-search/sidebar-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from 'ng-apexcharts';
import { VehiclePerformanceChartComponent } from './pages/dashboard/charts/vehicle-performance-chart/vehicle-performance-chart.component';
import { VehicleHealthChartComponent } from './pages/dashboard/charts/vehicle-health-chart/vehicle-health-chart.component';
import { RunningVehiclesChartComponent } from './pages/dashboard/charts/running-vehicles-chart/running-vehicles-chart.component';
import { AveragePetrolUsageChartComponent } from './pages/dashboard/charts/average-petrol-usage-chart/average-petrol-usage-chart.component';
import { TotalVehiclesChartComponent } from './pages/dashboard/charts/total-vehicles-chart/total-vehicles-chart.component';
import { InformationOfReceiptOfIssuedPetrolComponent } from './pages/information-of-receipt-of-issued-petrol/information-of-receipt-of-issued-petrol.component';
import { SearchOfVehicleComponent } from './pages/search-of-vehicle/search-of-vehicle.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';

defineCustomElements();
registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        SidebarSearchComponent,
        VehiclePerformanceChartComponent,
        VehicleHealthChartComponent,
        RunningVehiclesChartComponent,
        AveragePetrolUsageChartComponent,
        TotalVehiclesChartComponent,
        InformationOfReceiptOfIssuedPetrolComponent,
        SearchOfVehicleComponent,
        ProductCategoryComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        NgApexchartsModule,
        Ng2SearchPipeModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        ProfabricComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
