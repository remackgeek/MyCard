import {
    Component,
    Injectable,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';

@Injectable()
export class RatingService {
    updateRatings(rating): boolean[] {
        const result = Array.from({ length: 5 }).map((state, index) => {
            return index < rating + 1;
        });
        return result;
    }
}

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {

    public ratingStates: boolean[];
    private theRating = 1;

    @Input()
    get rating() {
        return this.theRating;
    }
    set rating(newRating: any) {
        this.theRating = parseInt(newRating, 10);
        this.ratingStates = this.ratingService.updateRatings(this.theRating);
        this.ratingChange.emit(newRating);
    }

    @Output() ratingChange = new EventEmitter();

    constructor(
        private ratingService: RatingService,
    ) {
        this.rating = 1;
    }

    handleRatingClicked(newRating) {
        this.rating = newRating;
    }

}
