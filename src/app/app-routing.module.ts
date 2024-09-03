import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', 
                redirectTo: 'firstpage', 
                pathMatch: 'full'
            },
            {
                path: 'firstpage', 
                loadChildren: () => import('./demo/components/firstpage/firstpage.module').then(m => m.FirstpageModule),
            },
            {
                path: '', 
                component: AppLayoutComponent,
                children: [
                    { 
                        path: 'dashboard', 
                        loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),
                    },
                    { 
                        path: 'user', 
                        loadChildren: () => import('./demo/components/user/user.module').then(m => m.UserModule),
                    },
                    { 
                        path: 'categorie', 
                        loadChildren: () => import('./demo/components/categorie/categorie.module').then(m => m.CategorieModule),
                    },
                    { 
                        path: 'souscategorie', 
                        loadChildren: () => import('./demo/components/souscat/souscat.module').then(m => m.SouscatModule),
                    },
                    { 
                        path: 'question', 
                        loadChildren: () => import('./demo/components/question/question.module').then(m => m.QuestionModule),
                    },
                    { 
                        path: 'test', 
                        loadChildren: () => import('./demo/components/test/test.module').then(m => m.TestModule),
                    },
                  
                ],
            },
            { path: '**', redirectTo: 'firstpage' } // Redirige vers firstpage si la route n'est pas trouvée
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
