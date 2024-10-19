import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

  
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
    
  },
  {
    path: 'home',
    component:HomeComponent
    
    },
    {
    path: 'About',
    component: AboutComponent
    },
    
    
    {
    
    path:'Contact',
    component: ContactComponent
    },
    {
    path: 'Service',
    component: ServiceComponent
    
    
    }




];
