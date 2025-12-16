import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SideMenuOption {
  label: string;
  icon: string;
  route: string;
  subLabels: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  menuOptions: SideMenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashborad/trending',
      subLabels: 'Trending Gifs',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashborad/search',
      subLabels: 'Search Gifs',
    },
    // {
    //   icon: 'fa-solid fa-clock-rotate-left',
    //   label: 'History',
    //   route: '/dashborad/history',
    //   subLabels: 'Recent Searches',
    // },
  ];
}
