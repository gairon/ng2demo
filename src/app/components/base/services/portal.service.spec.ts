import { TestBed, inject } from '@angular/core/testing';

import { PortalService } from './portal.service';

describe('VideoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PortalService]
        });
    });

    it('should ...', inject([PortalService], (service: PortalService) => {
        expect(service).toBeTruthy();
    }));
});
