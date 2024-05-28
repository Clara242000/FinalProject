import { v4 as uuidv4 } from 'uuid';

export class Produse{
    constructor(title , imageUrl , year, rating , category ,bookmark , whatsnewmodel){
      this.id = uuidv4();
      this.title = title;
      this.imageUrl = imageUrl;
      this.year = year;
      this.rating = rating;
      this.category = category;
      this.bookmark = bookmark;
      this.whatsnewmodel = whatsnewmodel;
    }
  }