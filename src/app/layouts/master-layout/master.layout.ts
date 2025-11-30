import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutcomponent } from '../../components/header-layout/header-layout.component.';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master.layout.html',
  imports: [RouterOutlet, HeaderLayoutcomponent],
})
export class MasterLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
