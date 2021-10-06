import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {environment} from '../environments/environment';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {TasksPageComponent} from './pages/tasks-page/tasks-page.component';
import {RecurringTasksPageComponent} from './pages/recurring-tasks-page/recurring-tasks-page.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzAffixModule} from 'ng-zorro-antd/affix';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {QuickAddTaskComponent} from './components/quick-add-task/quick-add-task.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {TaskDrawerTitlePipe} from './pipes/task-drawer-title.pipe';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {TaskRowComponent} from './components/task-row/task-row.component';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {CreateEditTaskComponent} from './components/create-edit-task/create-edit-task.component';
import {CreateEditRecurringTaskComponent} from './components/create-edit-recurring-task/create-edit-recurring-task.component';
import { RecurringTaskTableComponent } from './components/recurring-task-table/recurring-task-table.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import { FrequencyToStringPipe } from './pipes/frequency-to-string.pipe';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TasksPageComponent,
    RecurringTasksPageComponent,
    QuickAddTaskComponent,
    TaskListComponent,
    TaskDrawerTitlePipe,
    CreateEditTaskComponent,
    CreateEditRecurringTaskComponent,
    TaskRowComponent,
    RecurringTaskTableComponent,
    FrequencyToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    FontAwesomeModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzAffixModule,
    NzWaveModule,
    NzButtonModule,
    NzPopoverModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzDrawerModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzTableModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
