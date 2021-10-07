import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  regresar() {
    this.router.navigate(['/']);
  }
}
