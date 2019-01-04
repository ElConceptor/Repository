import { NgModule } from '@angular/core';

import { RepositorySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RepositorySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RepositorySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RepositorySharedCommonModule {}
