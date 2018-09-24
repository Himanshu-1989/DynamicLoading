import { Component, Output, ViewEncapsulation, OnDestroy, OnInit, Input, Inject, EventEmitter, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trip-summary-change-modal',
    templateUrl: './trip-summary-modal.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TripSummaryChangeModalComponent implements OnInit, OnDestroy {
    constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

}
