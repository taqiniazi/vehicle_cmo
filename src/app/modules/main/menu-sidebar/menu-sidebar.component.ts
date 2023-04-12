import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        path: ['/']
    },
    {
        name: 'General',
        children: [
            {
                name: 'Daily Patrol Receipt',
                path: ['/daily-patrol-receipt']
            },
            {
                name: 'Search of Vehicle',
                path: ['/search_of_vehicle']
            }
            ,
            {
                name: 'Product Category',
                path: ['/product_category']
            }
        ]
    },
    {
        name: 'Balloting Moavineen-e- Hujjaj',
        children: [
            {
                name: 'BS  7 - 16',
                path: ['/hajj-balloting']
            },
            {
                name: 'BS  17 - 18',
                path: ['/hajj-balloting']
            }
        ]
    },
    {
        name: 'Leave Records',
        path: ['/leave-record']
    },
    {
        name: 'Vaccination',
        path: ['/vaccination']
    },
    {
        name: 'Blank',
        path: ['/blank']
    }
    
];
