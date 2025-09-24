import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo, redirectUnauthorizedTo,
  canActivate, AuthGuard

} from "@angular/fire/auth-guard";

const isLoged = () => redirectLoggedInTo(['/home']);
const isNotLoged = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
            canActivate: [AuthGuard],
    data: {authGuardPipe: isLoged},
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
        canActivate: [AuthGuard],
        data: {authGuardPipe: isNotLoged},
      },
      {
        path: 'user-config',
        loadChildren: () => import('./pages/configUser/user-config.module').then( m => m.UserConfigPageModule)
      },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
