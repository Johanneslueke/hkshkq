import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import MapNavigation from './../map-navigation';


@NgModule({
  declarations: [AppComponent, MapNavigation, ],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    AgGridModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}