import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeLink = 'DASHBOARD';
  navLinkList = ['DASHBOARD', 'CONTENT', 'USERS', 'REPORTS', 'ADMIN'];
  isDashboard: any;

  isMenuOpen:boolean = false;
  isAlertsOpen:boolean = false;
  isAnnouncementsOpen:boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((url: any) => {
      this.isDashboard = router.routerState.snapshot.url === '/dashboard';
    });
  }

  ngOnInit(): void {}
}
