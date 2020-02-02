import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'modal-control',
  templateUrl: './modal-control.component.html',
  styleUrls: [ './modal-control.component.css' ]
})

export class ModalControlComponent implements OnInit {
  @Input('open') openEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input('title') title = '';
  @Input('saveText') saveText = 'Submit';
  @Input('errorCount') errorCount = true;
  @Input('cancelText') cancelText = 'Cancel';
  @Input('visible') visible = false;
  @Input('save') save = this.close;
  @Input('modalSize') modalSize = '';
  @Output('close') closeEvent: EventEmitter<{ action: string, initiator: any }> = new EventEmitter<{ action: string, initiator: any }>();

  initiator: any;

  private tick_then(fn) {
    setTimeout(fn, 0);
  }

  constructor() {
  }

  ngOnInit() {
    this.openEvent.subscribe(initiator => {
      this.visible = !!initiator; // TODO revisit this
      this.initiator = initiator;
    });
  }

  close(action: string, event: Event) {
    if (action == 'ok') {
      this.closeEvent.emit({ action: 'closing', initiator: event });
    }

    if (action == 'yes') {
      this.visible = false;
      this.closeEvent.emit({ action: action, initiator: this.initiator });
    }

    if (event.defaultPrevented) {
      return;
    }

    this.visible = false;
    this.closeEvent.emit({ action: action, initiator: this.initiator });
  }

  toggleVisiblity() {
    this.visible = !this.visible;
  }
}
