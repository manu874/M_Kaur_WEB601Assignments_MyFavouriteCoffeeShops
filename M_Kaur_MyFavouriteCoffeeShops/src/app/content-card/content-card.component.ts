import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Tim hortons",
      description:"Tim Hortons Inc., commonly nicknamed Tim's or Timmie's, is a Canadian multinational coffeehouse and restaurant chain.",
      creator:"Jim Charade",
      imgURL:"https://www.kimp.io/wp-content/uploads/2023/08/Tim-Hortons-brand.jpg",
      type:"Multinational"
    });
    this.contentList.addContent({
      id: 1,
      title: "Star Bucks",
      description:"Handcrafted Beverages: Fresh-brewed coffee, hot and iced espresso beverages, Frappuccino® coffee and non-coffee blended beverages, Starbucks Refreshers, smoothies and Tazo® teas.",
      creator:"Jerry Baldwin",
      imgURL:"https://i.abcnewsfe.com/a/8e5467c5-7156-436b-af4e-7cce95634fe0/starbucks-logo-ss-jt-240103_1704310089160_hpMain_16x9.jpg?w=992",
      type:"International Brand"
    });
    this.contentList.addContent({
      id: 2,
      title: "MCD",
      description:"A brand which sells coffees, burgers and fries.",
      creator:"Richard MacDonald",
      imgURL:"https://blog.tipranks.com/wp-content/uploads/2023/11/shutterstock_2323787401-750x406.jpg",
      type:"Internations food and coffee brand"
    });
  }
}