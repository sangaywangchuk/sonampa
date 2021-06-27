export interface ChartModel {
  chartOptions: object;
  chartLabels: string[];
  chartType: string;
  chartLegend: boolean;
  chartData: Array<object>;
}



export interface PlantDiseaseData {
  geolocation: {
    lat: string,
    lon: string,
  };
  dzongkhag: string;
  disease: {
    crop: string,
    diseaseName: string
  };
  user: {
    name: string,
    cid: string,
    phoneNo: string
  };
  time: string;
  image: string;
}

export const plantDiseaseData = [
  {
    geolocation: {
      lat: '28.8951',
      lon: '-87.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Apple',
      diseaseName: 'Black rot'
    },
    user: {
      name: 'sonam Wangdi',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '28.8951',
      lon: '-87.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Apple',
      diseaseName: 'Black rot'
    },
    user: {
      name: 'sonam Wangdi',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '28.8951',
      lon: '-87.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Apple',
      diseaseName: 'Black rot'
    },
    user: {
      name: 'sonam Wangdi',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '28.8951',
      lon: '-87.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Apple',
      diseaseName: 'Black rot'
    },
    user: {
      name: 'sonam Wangdi',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Apple',
      diseaseName: 'Apple scab'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Apple',
      diseaseName: 'Apple scab'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Apple',
      diseaseName: 'Apple scab'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Apple',
      diseaseName: 'Apple scab'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Apple',
      diseaseName: 'Apple scab'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Maize',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Maize',
      diseaseName: 'Cercospora leaf spot gray leaf spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Maize',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Maize',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Orange',
      diseaseName: 'Haunglongbing'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Orange',
      diseaseName: 'Haunglongbing (citrus greening)'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Orange',
      diseaseName: 'Haunglongbing (citrus greening)'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Peach',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Peach',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Peach',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown '
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Peach',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },{
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },{
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Maize',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },




  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Peach',
      diseaseName: 'Bacterial spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'trongsa',
    disease: {
      crop: 'Potato',
      diseaseName: 'Early blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Potato',
      diseaseName: 'Common rust'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Potato',
      diseaseName: 'orthern leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Rice',
      diseaseName: 'Bacterial leaf blight'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'tashigang',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown spot'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Brown '
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'mongar',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'thimphu',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'haa',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  },
  {
    geolocation: {
      lat: '38.8951',
      lon: '-77.0364'
    },
    dzongkhag: 'paro',
    disease: {
      crop: 'Rice',
      diseaseName: 'Leaf smut'
    },
    user: {
      name: 'Rinzin Wangchuk',
      cid: '10715003485',
      phoneNo: '17453456'
    },
    time: '2017-07-04*13:23:55',
    image: 'http://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg',
  }
];

export const plantDiseaseType = {
  Apple: ['Apple scab', 'Black rot', 'Cedar apple rust', 'Healthy'],
  Maize: ['Cercospora leaf spot gray leaf spot', 'Common rust', 'orthern leaf blight'],
  Orange: ['Haunglongbing (citrus greening)'],
  Peach: ['Bacterial spot'],
  Potato: ['Early blight', 'Late blight'],
  Rice: ['Bacterial leaf blight', 'Brown spot', 'Leaf smut']
};
