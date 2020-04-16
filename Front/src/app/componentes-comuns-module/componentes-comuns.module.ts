import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';

//import { SidenavComponent } from './sidenav/sidenav.component';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [FooterComponent, 
                 NavegationBarComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent, NavegationBarComponent]
})

export class ComponentesComunsModule { }
