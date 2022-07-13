import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('RUSHI', '', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  required
  constructor(private _enrollmentService: EnrollmentService) {}
  ngOnInit() {

  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

}
