import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnPanelRoutingModule } from './on-panel-routing.module';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from 'src/app/core/interceptors/header.interceptor';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    OnPanelRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ]
})
export class OnPanelModule { }
