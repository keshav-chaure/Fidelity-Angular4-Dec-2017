import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorageService';

import * as moment from 'moment';

import add from './dummy';



console.log(add(100,200));

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	closedCount : number = 0;

	sortBugBy : string = 'name';

	sortByDescending : boolean = false;

	
	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}
	

	constructor(private bugStorage : BugStorageService){
		
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bugToRemove => this.bugStorage.remove(bugToRemove));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}