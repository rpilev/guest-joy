export class Hero {
  title: string;
  content: string;
  languages: {name: string, selected: boolean}[];

  constructor(title: string, content: string, languages: {name: string, selected: boolean}[]) {
    this.title = title;
    this.content = content;
    this.languages = languages;
  }
}