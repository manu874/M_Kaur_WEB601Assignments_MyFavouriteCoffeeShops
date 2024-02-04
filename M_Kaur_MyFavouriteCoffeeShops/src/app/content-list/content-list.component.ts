import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Tim hortons",
        description:"Tim Hortons Inc., commonly nicknamed Tim's or Timmie's, is a Canadian multinational coffeehouse and restaurant chain.",
        creator:"Jim Charade",
        imgURL:"https://www.kimp.io/wp-content/uploads/2023/08/Tim-Hortons-brand.jpg",
        type:"Multinational",
        tags: ["traditional", "Tims"]
      },
      {
        id: 1,
      title: "Star Bucks",
      description:"Handcrafted Beverages: Fresh-brewed coffee, hot and iced espresso beverages, Frappuccino® coffee and non-coffee blended beverages, Starbucks Refreshers, smoothies and Tazo® teas.",
      creator:"Jerry Baldwin",
      imgURL:"https://i.abcnewsfe.com/a/8e5467c5-7156-436b-af4e-7cce95634fe0/starbucks-logo-ss-jt-240103_1704310089160_hpMain_16x9.jpg?w=992",
      type:"International Brand",
        tags: ["Starbucks", "Coffee"]
      },
      {
        id: 2,
      title: "MCD",
      description:"A brand which sells coffees, burgers and fries.",
      creator:"Richard MacDonald",
      imgURL:"https://blog.tipranks.com/wp-content/uploads/2023/11/shutterstock_2323787401-750x406.jpg",
      type:"Internations food and coffee brand",
        tags: ["Coffee", "Burger"]
      },
      {
        id: 3,
        title: "Bean North Coffee Roasting",
        description: "Roasters are the people who transform imported green coffee beans into beans that can then be ground, brewed and consumed by customers — a vital part of the coffee supply chain..",
        creator: "Germen Persia",
        imgURL: "https://beannorth.com/cdn/shop/files/Darkroastcoffeesubscription.png?v=1700761789",
        type: "Roasters",
        tags: ["Beans", "Coffee"]
      },
      {
        id: 4,
        title: "Sweet Maria's coffee",
        description: "Sweet Maria's was founded by Thompson Owen in 1997 with Maria Troy, who he met in the Masters program at School of the Art Institute Chicago. Thompson (or Thom or Tom) is in charge of the green coffee side our company and does much of the writing and photography etc.",
        creator: "Thompson Owen",
        imgURL: "https://pbs.twimg.com/profile_images/714600698743242752/cmK1odH9_400x400.jpg",
        type: "Coffee shop which is not famous",
        tags: ["Sweet", "Underrated"]
      }
      
    ];
  }
 
}