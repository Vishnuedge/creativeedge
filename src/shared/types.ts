export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    WeTeach = 'weteach',
    ContactUs=  'contactus'
  }

  export interface BenefitType {
    icon : JSX.Element;
    title : string;
    description : string;
  }