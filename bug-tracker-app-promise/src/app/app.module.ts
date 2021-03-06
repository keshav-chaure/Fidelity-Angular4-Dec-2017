import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorageService';
import { BugServerService } from './bugTracker/services/bugServer.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';




@NgModule({ 
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    ClosedCountPipe,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
