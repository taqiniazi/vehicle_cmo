import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {LoginComponent} from '@modules/login/login.component';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import { InformationOfReceiptOfIssuedPetrolComponent } from '@pages/information-of-receipt-of-issued-petrol/information-of-receipt-of-issued-petrol.component';
import { SearchOfVehicleComponent } from '@pages/search-of-vehicle/search-of-vehicle.component';
import { ProductCategoryComponent } from '@pages/product-category/product-category.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        children: [
            
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'daily-patrol-receipt',
                component: InformationOfReceiptOfIssuedPetrolComponent
            },
            {
                path: 'search_of_vehicle',
                component: SearchOfVehicleComponent
            },
            {
                path: 'product_category',
                component: ProductCategoryComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
