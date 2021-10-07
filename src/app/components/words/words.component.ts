import { Component, Input, OnInit } from '@angular/core';
import { Word } from 'src/app/interfaces/word.interface';
import { WordsService } from 'src/app/services/words.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})
export class WordsComponent implements OnInit {

  words: Word[] = [];
  id;

  constructor(private wordsService: WordsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.wordsService.getWordsByCategory(this.id).subscribe(
      (resp:any) => {
        this.words = resp;
        console.log(this.words);
      }
    )
  }
}
