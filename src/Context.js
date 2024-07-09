import React,{Component} from 'react';
const Context=React.createContext();
export class Provider extends Component{
       state={
        projects:[
          {
              id:1,
              title:"Chicken Biryani",
              imgurl:"https://static.toiimg.com/photo/84854767.cms?imgsize=860808",
              main:"",
              body:"body1"
          },
          {
              id:2,
              title:"chicken Chapathi",
              imgurl:"https://www.unclejerryskitchen.com/wp-content/uploads/2019/12/Slow-cooker-pork-carnitas.jpg",
              main:"This project based on Js&css&html",
              body:"body2"
          },
          {
              id:3,
              title:"Gobi Rice",
              imgurl:"https://th.bing.com/th/id/R.0644d24f69ca331afb7078c00299dff8?rik=sfz3r3lkkE474g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-U-ad6kASPb8%2fUEoku4EsgAI%2fAAAAAAAACS8%2fc5UcA56ZCA0%2fs1600%2fgobi1.jpg&ehk=15MDcsdlle1Z0g6OulDJzAWxtXghdzLLOvORuKyilkc%3d&risl=&pid=ImgRaw&r=0",
              main:"This project is based on js&bootstrap",
              body:"body3"
          },
          {
              id:4,
              title:"Nudles",
              imgurl:"https://detoxinista.com/wp-content/uploads/2021/01/vegan-pad-thai-640x640.jpg",
              main:"This project is based on React js",
              body:"body5"
          },
          {
              id:5,
              title:"Egg dosa",
              imgurl:"https://img.huffingtonpost.com/asset/5d022eff2500004e12e39f6f.jpeg?ops=1778_1000",
              main:"This project is based on fullstack",
              body:"body6"
          },
          {
              id:6,
              title:"pizza",
              imgurl:"https://inspirationseek.com/wp-content/uploads/2016/02/Pizza.jpg",
              main:"This project is based on fullstack",
              body:"body7"
          },
          {
            id:7,
            title:"parota",
            imgurl:"https://i.pinimg.com/originals/f3/25/ea/f325ea6c0fdfb7469c91693548b32fe9.jpg",
            main:"This project is based on React js",
            body:"body5"
        },
        {
            id:8,
            title:"meals",
            imgurl:"https://i.pinimg.com/originals/16/ed/7f/16ed7f6b3d6ad709a73a8d8ff5d8a50a.jpg",
            main:"This project is based on fullstack",
            body:"body6"
        },
        {
            id:9,
            title:"Egg biryani",
            imgurl:"https://th.bing.com/th/id/R.ee5373164efe07b09df04e401ffe6a8e?rik=jSP5Bj7u7Thceg&riu=http%3a%2f%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f02%2fEGgBiryani-3.jpg&ehk=Q%2f8ChUxo9b5pkcSI2DcQmlbT6hKYnT1L%2b6TAHW47xbQ%3d&risl=&pid=ImgRaw&r=0",
            main:"This project is based on fullstack",
            body:"body7"
        }
          
      ],
      products:[
        {
            id:1,
            title:"records",
            imgurl:"https://i.pinimg.com/originals/81/93/32/8193321cbffc7c20b73714190ab67d32.jpg",
            cost:""
        },
        {
            id:2,
            title:"pens",
            imgurl:"https://th.bing.com/th/id/OIP.914_L0rNlUUvrX7vRRcRTwHaGl?pid=ImgDet&rs=1",
            cost:""
        },
        {
            id:2,
            title:"notebooks",
            imgurl:"https://images.currentcatalog.com/catalog/product/619564/619564_s20u2.jpg",
            cost:""
        },
        {
            id:4,
            title:"Everything",
            imgurl:"https://upload.wikimedia.org/wikipedia/commons/4/40/Bookstore_(Eugene%2C_Oregon).JPG",
            cost:""
        },
        {
            id:5,
            title:"bookstore",
            imgurl:"https://th.bing.com/th/id/OIP.KWbnXjP7Azt4etpA8kBTlgHaHM?pid=ImgDet&rs=1",
            cost:""
        },
        {
            id:6,
            title:"bookstore",
            imgurl:"https://th.bing.com/th/id/OIP.NWUu252j8CCEpTAl9dYu-wHaE8?pid=ImgDet&w=2560&h=1707&rs=1",
            cost:""
        },
      ],
      store:[
        {
            id:1,
            title:"umbrella",
            imgurl:"https://th.bing.com/th/id/OIP.Jr27dg5ICL3ZOyDMjN_D7QHaHa?pid=ImgDet&w=640&h=640&rs=1",
            main:"",
            body:"body1"
        },
        {
            id:2,
            title:"bed",
            imgurl:"https://s3.amazonaws.com/images.ecwid.com/images/16966010/1072737478.jpg",
            main:"This project based on Js&css&html",
            body:"body2"
        },
        {
            id:3,
            title:"bucket",
            imgurl:"https://www.andrewmaskery.co.uk/img/photos/Calf%20Bucket.jpg",
            main:"This project is based on js&bootstrap",
            body:"body3"
        },
        {
            id:4,
            title:"bottles",
            imgurl:"https://images6.qualitylogoproducts.com/custom-waterbottles/trek-bottle-25-oz-superextralarge.jpg",
            main:"This project is based on React js",
            body:"body5"
        },
        {
            id:5,
            title:"plates",
            imgurl:"https://b3h2.scene7.com/is/image/BedBathandBeyond/102006447527683p?$690$&wid=690&hei=690",
            main:"This project is based on fullstack",
            body:"body6"
        },
        {
            id:6,
            title:"bags",
            imgurl:"https://n4.sdlcdn.com/imgs/g/o/p/school-bag-SDL054519274-1-3ebd7.JPG",
            main:"This project is based on fullstack",
            body:"body7"
        },
        {
          id:7,
          title:"General store",
          imgurl:"https://www.tasteofhome.com/wp-content/uploads/2018/12/jefferson-general-store-696x696.jpg",
          main:"This project is based on React js",
          body:"body5"
      },
      {
          id:8,
          title:"General store",
          imgurl:"https://www.prepscholar.com/gre/blog/wp-content/uploads/sites/3/2016/09/general-store-269539_1920.jpg",
          main:"This project is based on fullstack",
          body:"body6"
      },
      {
          id:9,
          title:"General store",
          imgurl:"https://www.seekpng.com/png/detail/957-9573156_general-store-items-png.png",
          main:"This project is based on fullstack",
          body:"body7"
      }
      ,
      {
        id:10,
        title:"General store",
        imgurl:"https://th.bing.com/th/id/R.8c1fd5368bc87f1895ff8452d32dac5d?rik=YMlfdm%2bJ2pm8Mg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-8elUl-lNggM%2fVVm3tHl2XDI%2fAAAAAAAAAGM%2f0NDtTYzQcy0%2fw1200-h630-p-k-no-nu%2fslide-img-01.png&ehk=1wTyncIU4lJAUdJv2ZPdtk2rmNL1mgNrpzdg94hPh1A%3d&risl=&pid=ImgRaw&r=0",
        main:"This project is based on React js",
        body:"body5"
    },
    {
        id:11,
        title:"General store",
        imgurl:"https://www.vallartadaily.com/wp-content/uploads/2017/09/nestle.jpg",
        main:"This project is based on fullstack",
        body:"body6"
    },
    {
        id:12,
        title:"General store",
        imgurl:"https://image.slidesharecdn.com/suvofmcgppt-171026191240/95/suvo-fmcg-ppt-4-638.jpg?cb=1509045302",
        main:"This project is based on fullstack",
        body:"body7"
    }
      ]
       }
    render(){
        return(
       <Context.Provider value={this.state}>
     {this.props.children}
       </Context.Provider>
        );
    }
} 
export const Consumer=Context.Consumer;