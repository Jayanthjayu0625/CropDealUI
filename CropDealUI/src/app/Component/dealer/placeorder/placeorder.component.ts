import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  constructor(
    public dialogRef: MatDialogRef<PlaceorderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { quantity: number }) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}