import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../loader/services/loader.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(
    private toastrService: ToastrService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.close();
    }, 3000);
  }

  onSubmit() {
    this.toastrService.success(
      'La información fue registrada correctamente.'
    );
  }
}
