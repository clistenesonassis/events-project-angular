import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {

  success(eventName: string) {
    toastr.success(eventName);
  }
}
