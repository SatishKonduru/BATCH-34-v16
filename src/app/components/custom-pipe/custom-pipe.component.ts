import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css'],
})
export class CustomPipeComponent {
  // name = 'Satish';
  // score: any;
  // total = 1000;
  // onClick(marks: any) {
  //   this.score = marks;
  // }
  filterText: any;
  filterData: any;
  students = [
    { name: 'Satish', age: 45, gender: 'Male' },
    { name: 'RENU', age: 38, gender: 'Female' },
    { name: 'RSK', age: 16, gender: 'Male' },
    { name: 'Micky', age: 11, gender: 'Female' },
  ];
  onSelect(e: any) {
    // this.filterText = e.value;
    // console.log('Selected  value: ', this.filterText);
    // if (this.filterText === 'All') {
    //   this.filterData = this.students;
    // } else {
    //   this.filterData = this.students.filter(
    //     (std) => std.gender === this.filterText
    //   );
    // }
    this.filterText = e.value;
    console.log('Filter Text: ', this.filterText);
  }
  addNewStudent() {
    const newStudent = {
      name: 'Chikkie',
      age: 13,
      gender: 'Female',
    };
    this.students.push(newStudent);
  }
}
