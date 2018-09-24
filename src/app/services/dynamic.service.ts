import { TripSummaryChangeModalComponent } from '../shared/tripSummary/trip-summary-modal.component';

export class DynamicEntryComponentService {
    constructor() {

    }

    public static getComponent(cmpName: string) {
        const objComponentList = {
            'TripSummaryChangeModalComponent': TripSummaryChangeModalComponent
          
        };
        return objComponentList[cmpName];
    }
}
