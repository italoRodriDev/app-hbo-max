import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'recover-account',
    loadChildren: () => import('./pages/recover-account/recover-account.module').then( m => m.RecoverAccountPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/client/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-movie',
    loadChildren: () => import('./pages/client/detail-movie/detail-movie.module').then( m => m.DetailMoviePageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/client/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
