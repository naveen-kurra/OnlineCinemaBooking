import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { bmsApiService } from '../../services/bmsapi.service';
import { MsgPopupComponent } from '../msg-popup/msg-popup.component';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  genres = ["Action", "Horror", "Thriller", "Comedy", "Drama", "Adventure", "Documentary", "Fiction", "Mystery", "Animation"];
  ratings = ["G: General Audiences", "PG: Parental Guidance Suggested", "PG-13: Parents Strongly Cautioned", "R: Restricted", "NC-17: Clearly Adult"];
  constructor(private fb: FormBuilder, private _bmsAs: bmsApiService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.genres = ["Action", "Horror", "Thriller", "Comedy", "Drama", "Adventure", "Documentary", "Fiction", "Mystery", "Animation"];
    this.ratings = ["G: General Audiences", "PG: Parental Guidance Suggested", "PG-13: Parents Strongly Cautioned", "R: Restricted", "NC-17: Clearly Adult"];
    this.addMovieForm = this.fb.group({
      title: ['', [Validators.required]],
      cast: ['', [Validators.required]],
      director: ['', [Validators.required]],
      producer: ['', [Validators.required]],
      synopsis: ['', [Validators.required]],
      trailer: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      thumbnailName: [''],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      category: ['', [Validators.required]],
      rating: ['', [Validators.required]]
    }, {
      validators: this.startDatecheck.bind(this)
    });
  };

  startDatecheck(formGroup: FormGroup) {
    const fromDate = formGroup.get('startdate')?.value;
    const toDate  = formGroup.get('enddate')?.value;
    if ((fromDate !== null && toDate !== null) && fromDate > toDate) {
        return {'endDateError': true}; 
    }
  }

  ngAfterViewInit() {
    this.genres = ["Action", "Horror", "Thriller", "Comedy", "Drama", "Adventure", "Documentary", "Fiction", "Mystery", "Animation"];
    this.ratings = ["G: General Audiences", "PG: Parental Guidance Suggested", "PG-13: Parents Strongly Cautioned", "R: Restricted", "NC-17: Clearly Adult"];
  }

  sucessPopup(msg:any) {
    const popup2 = this.dialogRef.open(MsgPopupComponent, {
      disableClose: true,
      enterAnimationDuration: '700ms',
      exitAnimationDuration:'1000ms',
      maxHeight: '80vh',
      width: '400px',
      data: msg
    });
    popup2.afterClosed().subscribe(item =>{
      location.reload();
    });
  }

  addNewMovie() {
    var movie: any;
    this.addMovieForm.markAllAsTouched();
    if (this.addMovieForm.valid) {
      movie = {
        title: this.addMovieForm.value.title,
        cast: this.addMovieForm.value.cast,
        director: this.addMovieForm.value.director,
        producer: this.addMovieForm.value.producer,
        synopsis: this.addMovieForm.value.synopsis,
        trailer: this.addMovieForm.value.trailer,
        thumbnail: this.addMovieForm.value.thumbnail,
        thumbnailName: this.addMovieForm.value.thumbnailName,
        startdate: this.addMovieForm.value.startdate,
        enddate: this.addMovieForm.value.enddate,
        category: this.addMovieForm.value.category,
        rating: this.addMovieForm.value.rating
      }
      let data2 = JSON.stringify(movie);
      console.log(data2);
      this._bmsAs.addMovie(data2).subscribe(res => {
        if(res) {
          this.sucessPopup("Movie Added Successfully!!!");
        }
      });
    }

  }

  updateGenre(evt: any) {

  }

  updateRating(evt: any) {

  }

  convertImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (_event: any) => {
          this.addMovieForm.patchValue({
              thumbnail: _event.target.result,
              thumbnailName: event.target.files[0].name
          });
      };
      reader.readAsDataURL(event.target.files[0]);
  }
  }

}
