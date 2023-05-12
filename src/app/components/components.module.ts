import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ],
})
export class ComponentsModule {}
