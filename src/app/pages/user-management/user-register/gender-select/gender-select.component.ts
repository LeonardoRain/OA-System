import { Component, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.css']
})
export class GenderSelectComponent implements DoCheck {

  selectedGender = null;

  @Output() toParent = new EventEmitter();

  getGender() {
    // emit()里的参数就是要传递的值，toParent就是上面EventEmitter 实例化的对象名称toParent
    this.toParent.emit(this.selectedGender);
  }

  ngDoCheck(): void {
    this.getGender();
  }
}
